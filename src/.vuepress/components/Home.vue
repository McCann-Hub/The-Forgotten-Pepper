<template>
  <div
    class="min-h-full flex flex-col items-center"
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="disabled"
  >
    <not-found v-if="posts.length < 1" class="flex-grow" />
    <transition-group name="list" tag="div" class="flex flex-col items-center">
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
</template>

<script>
import infiniteScroll from "vue-infinite-scroll";

export default {
  name: "Home",
  components: {
    NotFound: () => import("@theme/layouts/404.vue"),
  },
  directives: {
    infiniteScroll,
  },
  data: () => ({
    display: [],
    busy: false,
  }),
  computed: {
    posts() {
      const posts = (this.$site.pages || []).filter((p) => p.id === "post");
      posts.sort((a, b) => {
        const aCreated = new Date(a.frontmatter.date || a.created);
        const bCreated = new Date(b.frontmatter.date || b.created);
        if (bCreated - aCreated === 0) {
          return new Date(b.lastUpdated) - new Date(a.lastUpdated);
        }
        return bCreated - aCreated;
      });
      return posts;
    },
    disabled() {
      return this.busy || this.display.length === this.posts.length;
    },
    pageSize() {
      return (this.$themeConfig.globalPagination || {}).lengthPerPage || 3;
    },
  },
  methods: {
    loadMore() {
      this.busy = true;
      const self = this;
      setTimeout(() => {
        const startIndex = self.display.length;
        const nextPage = self.posts.slice(
          startIndex,
          startIndex + self.pageSize
        );
        self.display.push(...nextPage);
        self.busy = false;
      }, 1000);
    },
  },
};
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, 
.list-leave-to {
  opacity: 0;
}
.list-enter {
  transform: translateY(25%);
}
.list-leave-to {
  height: 0px;
}
</style>