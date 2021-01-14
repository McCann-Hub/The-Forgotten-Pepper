<template>
  <div class="flex flex-col">
    <div class="flex-grow flex flex-col justify-evenly items-center">
      <page-card
        v-for="page in _pages"
        :key="page.key"
        :page="page"
        orientation="horizontal"
      />
    </div>
    <div v-if="pages.length < 1" class="flex justify-center items-center">
      <Pagination />
    </div>
  </div>
</template>

<script>
import { Pagination } from "@vuepress/plugin-blog/lib/client/components";

export default {
  name: "FrontmatterPagination",
  props: {
    pages: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    Pagination,
  },
  computed: {
    _pages() {
      if (this.pages.length > 0) {
        return this.pages;
      }
      return (this.$pagination || {}).pages || [];
    },
  },
};
</script>