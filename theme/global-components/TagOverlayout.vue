<template>
  <div
    id="overlay"
    class="bg-primary-900 bg-opacity-90 dark:bg-primary-50 dark:bg-opacity-90"
  >
    <div class="h-full relative">
      <a
        @click="$emit('close')"
        class="absolute right-1 top-0 z-10 cursor-pointer"
      >
        <svg
          class="fill-current w-7 h-7 text-text-500 hover:text-text-50 dark:text-text-400 dark:hover:text-text-900"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18 18"
        >
          <path
            d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
          />
        </svg>
      </a>
      <Tag class="min-h-full" :pages="_pages" />
    </div>
  </div>
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
  watch: {
    $route(to, from) {
      if (to.path !== from.path) {
        this.$emit("close");
      }
    },
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

<style scoped>
#overlay {
  position: absolute; /* Sit on top of the page content */
  width: 100%; /* Full width (cover the whole page) */
  max-height: var(--main-height);
  min-height: var(--main-height);
  top: var(--header-height);
  left: 0;
  right: 0;
  bottom: var(--footer-height);
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
}
</style>