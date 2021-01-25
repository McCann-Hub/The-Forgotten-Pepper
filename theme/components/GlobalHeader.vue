<template>
  <div
    class="flex bg-gray-100 bg-opacity-90 dark:bg-gray-900 dark:bg-opacity-90"
  >
    <span :class="['logo', ($themeConfig || {}).logo]"></span>
    <div class="flex flex-col justify-around w-full">
      <div class="flex justify-between">
        <a class="text-3xl font-bold" href="/">{{ $site.title }}</a>
        <dark-mode-switch class="mr-4" />
      </div>
      <div class="flex items-center">
        <frontmatter-select-bar />
        <nav-bar class="flex-grow" />
        <social-bar />
      </div>
    </div>
  </div>
</template>

<script>
import DarkModeSwitch from "@theme/components/DarkModeSwitch.vue";
import FrontmatterSelectBar from "@theme/components/FrontmatterSelectBar.vue";
import NavBar from "@theme/components/NavBar.vue";
import SocialBar from "@theme/components/SocialBar.vue";

export default {
  name: "GlobalHeader",
  components: {
    DarkModeSwitch,
    FrontmatterSelectBar,
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