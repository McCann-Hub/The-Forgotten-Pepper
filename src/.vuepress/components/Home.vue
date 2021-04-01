<template>
  <div
    id="home"
    class="min-h-full flex flex-col items-center"
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="disabled"
  >
    <not-found v-if="posts.length < 1 && !busy" class="flex-grow" />
    <div v-else class="posts">
      <ul class="tabs">
        <li>
          <a
            :class="open.newPosts ? 'active' : ''"
            @click="switchTab('newPosts')"
            >New</a
          >
        </li>
        <li>
          <a
            :class="open.popularPosts ? 'active' : ''"
            @click="switchTab('popularPosts')"
            >Popular</a
          >
        </li>
      </ul>
      <transition-group
        name="list"
        tag="div"
        class="post-cards flex flex-col items-center"
      >
        <page-card
          v-for="page in display"
          :key="page.key"
          :page="page"
          orientation="horizontal"
          hide-tags
          class="my-4"
        />
        <loading-icon v-if="busy" key="loading" class="h-36 w-36" />
      </transition-group>
    </div>
  </div>
</template>

<script>
import infiniteScroll from "vue-infinite-scroll";

function postDateSort(a, b) {
  const aCreated = new Date(a.frontmatter.date || a.created);
  const bCreated = new Date(b.frontmatter.date || b.created);
  if (bCreated - aCreated === 0) {
    return new Date(b.lastUpdated) - new Date(a.lastUpdated);
  }
  return bCreated - aCreated;
}

export default {
  name: "Home",
  components: {
    NotFound: () => import("@theme/layouts/404.vue"),
  },
  directives: {
    infiniteScroll,
  },
  data: () => ({
    posts: [],
    open: {
      newPosts: false,
      popularPosts: false,
    },
    displayByNew: [],
    displayByPopular: [],
    busy: false,
  }),
  computed: {
    postsByNew() {
      const posts = [...this.posts];
      posts.sort(postDateSort);
      return posts;
    },
    postsByPopular() {
      const posts = [...this.posts];
      posts.sort((a, b) => {
        const aCount = a.pinterestCount;
        const bCount = b.pinterestCount;
        if (bCount - aCount === 0) {
          return postDateSort(a, b);
        }
        return bCount - aCount;
      });
      return posts;
    },
    display() {
      if (this.open.newPosts) {
        return this.displayByNew;
      }
      if (this.open.popularPosts) {
        return this.displayByPopular;
      }
    },
    disabled() {
      return this.busy || this.display.length === this.posts.length;
    },
    pageSize() {
      return (this.$themeConfig.globalPagination || {}).lengthPerPage || 3;
    },
  },
  created() {
    /* runs every time the user navigates to home. Could be a performance issue? */
    this.busy = true;
    const self = this;
    const posts = (this.$site.pages || []).filter((p) => p.id === "post");
    Promise.all(
      posts.map((p) =>
        fetch(
          `https://widgets.pinterest.com/v1/urls/count.json?callback=_&url=${this.$themeConfig.domain}${p.path}`
        )
      )
    )
      .then((results) => {
        return Promise.all(results.map((r) => r.text()));
      })
      .then((bodies) => {
        bodies.forEach((b, i) => {
          const json = JSON.parse(b.slice(2, b.length - 1));
          //self.posts.push({ ...posts[i], ...{ pinterestCount: json.count } });
          self.posts.push({
            ...posts[i],
            ...{ pinterestCount: Math.floor(Math.random() * Math.floor(100)) },
          });
        });
        this.loadMore();
      });
  },
  mounted() {
    this.switchTab(localStorage.getItem("defaultPostList") || "newPosts");
  },
  methods: {
    switchTab(to) {
      Object.keys(this.open).forEach((k) => {
        if (k === to) {
          this.open[k] = true;
          localStorage.setItem("defaultPostList", k);
        } else {
          this.open[k] = false;
        }
      });
    },
    loadMore() {
      this.busy = true;
      const self = this;
      setTimeout(() => {
        const startIndex = self.display.length;
        const nextPageOfNew = self.postsByNew.slice(
          startIndex,
          startIndex + self.pageSize
        );
        self.displayByNew.push(...nextPageOfNew);
        const nextPageOfPopular = self.postsByPopular.slice(
          startIndex,
          startIndex + self.pageSize
        );
        self.displayByPopular.push(...nextPageOfPopular);
        self.busy = false;
      }, 1000);
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~@theme/styles/fonts.styl';

.list-enter-active,
.list-leave-active {
  @apply: transition duration-1000;
}
.list-leave-active {
  @apply: absolute;
}
/* */
.list-enter,
.list-leave-to {
  @apply: opacity-0 transform translate-y-full;
}
/* */
.list-move {
  @apply: transition-transform duration-1000;
}

#home {
  .posts {
    @apply: relative min-w-full;

    .tabs {
      @apply: bg-accent-500 bg-opacity-90 sticky text-center top-0;

      li {
        @apply: inline list-none mr-4 font-semibold font-pompiere-regular;

        a {
          @apply: cursor-pointer no-underline select-none text-lg text-text-700 text-opacity-50;
          transition: var(--transition-duration);

          &:hover {
            @apply: text-text-800 text-opacity-75;
          }

          &.active {
            @apply: text-gray-900 text-opacity-100;
          }
        }
      }
    }

    .post-cards {
      @apply: px-20;
    }
  }
}
</style>