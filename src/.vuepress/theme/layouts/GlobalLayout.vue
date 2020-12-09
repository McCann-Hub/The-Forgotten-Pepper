<template>
  <div class="h-screen flex flex-col">
    <header>
      <h1>Header</h1>
    </header>
    <main class="flex-grow">
      <component :is="layout" />
    </main>
    <footer>
      <h1>Footer</h1>
    </footer>
  </div>
</template>

<script>
export default {
  name: "GlobalLayout"
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
