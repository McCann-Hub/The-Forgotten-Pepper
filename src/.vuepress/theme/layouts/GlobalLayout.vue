<template>
  <div class="h-screen flex flex-col">
    <header class="flex flex-col">
      <h1>{{ $site.title }}</h1>
      <social-bar />
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
import SocialBar from '@theme/components/SocialBar.vue'

export default {
  name: "GlobalLayout",
  components: {
    SocialBar
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
