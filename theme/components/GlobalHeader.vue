<template>
  <div
    :class="`flex ${
      $themeConfig.dark
        ? 'bg-gray-900 text-gray-50'
        : 'bg-gray-50 text-gray-900'
    } bg-opacity-75`"
  >
    <span :class="['logo', $themeConfig.logo]"></span>
    <div class="flex flex-col w-full">
      <div class="flex">
        <a class="text-xl font-bold" href="/">{{ $site.title }}</a>
      </div>
      <div class="flex items-center">
        <frontmatter-search class="w-1/6" />
        <nav-bar class="flex-grow" />
        <social-bar />
      </div>
    </div>
  </div>
</template>

<script>
import FrontmatterSearch from "@theme/components/FrontmatterSearch.vue";
import NavBar from "@theme/components/NavBar.vue";
import SocialBar from "@theme/components/SocialBar.vue";

export default {
  name: "GlobalHeader",
  components: {
    FrontmatterSearch,
    NavBar,
    SocialBar,
  },
};
</script>

<style scoped>
.logo {
  display: inline-block;
  height: var(--header-height);
  width: var(--header-height);
}
</style>