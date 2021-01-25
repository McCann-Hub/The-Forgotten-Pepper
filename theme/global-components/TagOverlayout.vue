<template>
  <Overlay @close="$emit('close')">
    <Tag class="min-h-full" :pages="_pages" />
  </Overlay>
</template>

<script>
import Tag from "@theme/layouts/Tag.vue";

export default {
  name: "TagOverlayout",
  props: {
    pages: Array,
    default: () => [],
  },
  components: {
    Tag,
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
