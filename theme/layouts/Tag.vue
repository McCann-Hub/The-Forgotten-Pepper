<template>
  <div
    class="relative min-h-full min-w-full flex flex-col justify-center items-center"
  >
    <div
      class="min-h-full min-w-full flex flex-wrap justify-evenly items-center"
    >
      <page-card v-for="page in _pages" :key="page.key" :page="page" />
    </div>
    <div v-if="pages.length < 1" class="absolute bottom-0 w-full">
      <div class="flex justify-center items-center">
        <Pagination />
      </div>
    </div>
  </div>
</template>

<script>
import { Pagination } from "@vuepress/plugin-blog/lib/client/components";

export default {
  name: "Tag",
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