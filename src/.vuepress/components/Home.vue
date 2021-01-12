<template>
  <div
    class="min-h-full flex flex-col items-center"
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="disabled"
  >
    <not-found v-if="posts.length < 1" class="flex-grow" />
    <page-card
      v-for="page in display"
      :key="page.key"
      :page="page"
      orientation="horizontal"
      class="my-4"
    />
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
