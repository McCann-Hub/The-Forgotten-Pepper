<template>
  <div
    id="ingredient"
    class="min-h-full min-w-full flex flex-wrap justify-evenly items-center"
  >
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
      if (this.pages.length > 0) {
        return this.pages;
      }
      return (this.$pagination || {}).pages || [];
    },
  },
};
</script>

<style scoped>
#ingredient {
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
#ingredient::-webkit-scrollbar {
  display: none;
}
</style>