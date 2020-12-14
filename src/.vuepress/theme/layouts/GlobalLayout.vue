<template>
  <div>
    <header class="fixed top-0 w-full">
      <h1 class="text-xl font-bold">{{ $site.title }}</h1>
      <social-bar />
    </header>
    <main>
      <component :is="layout" />
    </main>
    <footer class="fixed bottom-0 w-full"></footer>
  </div>
</template>

<script>
import SocialBar from "@theme/components/SocialBar.vue";

export default {
  name: "GlobalLayout",
  components: {
    SocialBar,
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
  background-color: rgba(255, 255, 255, 0.75);
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
