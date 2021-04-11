<template>
  <div class="flex flex-col">
    <div class="ingredient flex-grow flex flex-wrap justify-evenly items-center">
      <page-card
        v-for="page in _pages"
        :key="page.key"
        :page="page"
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

<style lang="stylus" scoped>
.ingredient {
  > * {
    @apply: m-2;
    max-width: 20rem;
  }
}
</style>