<template>
  <div>
    <header class="fixed top-0 w-full">
      <global-header />
    </header>
    <main class="flex">
      <component :is="layout" />
    </main>
    <footer class="fixed bottom-0 w-full"></footer>
  </div>
</template>

<script>
import GlobalHeader from "@theme/components/GlobalHeader.vue";

export default {
  name: "GlobalLayout",
  components: {
    GlobalHeader,
  },
  computed: {
    layout() {
      if (this.$page.path) {
        if (this.$frontmatter.layout) {
          // You can also check whether layout exists first as the default global layout does.
          return this.$frontmatter.layout;
        }
        return "Layout";
      }
      return "NotFound";
    },
  },
};
</script>

<style scoped>
header {
  background-color: rgba(255, 255, 255, 0.5);
  min-height: var(--header-height);
}
main {
  margin: 0 auto;
  max-height: var(--main-height);
  min-height: var(--main-height);
  overflow-y: scroll;
  width: 80%;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
main::-webkit-scrollbar {
  display: none;
}
footer {
  background-color: black;
  color: white;
  min-height: var(--footer-height);
}
</style>
