<template>
  <div class="min-h-full flex flex-col">
    <div class="flex-grow flex justify-evenly items-center">
      <page-card
        v-for="page in _pages"
        :key="page.key"
        :page="page"
      />
    </div>
    <div v-if="pages.length < 1" class="flex justify-center items-center">
      <Pagination id="pagination" />
    </div>
  </div>
</template>


<script>
import { Pagination } from "@vuepress/plugin-blog/lib/client/components";

export default {
  name: "Ingredient",
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