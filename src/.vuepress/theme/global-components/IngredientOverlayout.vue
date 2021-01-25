<template>
  <Overlay @close="$emit('close')">
    <Ingredient class="min-h-full" :pages="_pages" />
  </Overlay>
</template>

<script>
import Ingredient from "@theme/layouts/Ingredient.vue";

export default {
  name: "IngredientOverlayout",
  props: {
    pages: Array,
    default: () => [],
  },
  components: {
    Ingredient,
  },
  computed: {
    _pages() {
      const pages = [...this.pages];
      pages.sort((a, b) => {
        const aCreated = new Date(a.frontmatter.date || a.created);
        const bCreated = new Date(b.frontmatter.date || b.created);
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
