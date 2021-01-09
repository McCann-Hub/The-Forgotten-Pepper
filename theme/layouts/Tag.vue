<template>
  <frontmatter-pagination :pages="_pages" />
</template>

<script>
import FrontmatterPagination from "./FrontmatterPagination.vue";

export default {
  name: "Tag",
  props: {
    pages: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    FrontmatterPagination,
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