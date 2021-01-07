<template>
  <div class="min-h-full min-w-full flex flex-wrap justify-evenly items-center">
    <page-card v-for="page in _pages" :key="page.key" :page="page" />
  </div>
</template>

<script>
export default {
  name: "Ingredient",
  props: {
    pages: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    _pages() {
      let pages;
      if (this.pages.length > 0) {
        pages = [...this.pages];
      } else {
        pages = [...((this.$pagination || {}).pages || [])];
      }
      pages.sort((a, b) => {
        const aCreated = new Date(a.created);
        const bCreated = new Date(b.created);
        if (bCreated - aCreated === 0) {
          return new Date(b.lastUpdated) - new Date(a.lastUpdated);
        }
        return bCreated - aCreated;
      });
      return pages;
    },
  },
};
</script>