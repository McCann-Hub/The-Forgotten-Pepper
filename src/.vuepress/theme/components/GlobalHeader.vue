<template>
  <div class="flex">
    <span :class="['logo', $themeConfig.logo]"></span>
    <div class="flex flex-col w-full">
      <div class="flex">
        <a class="text-xl font-bold" href="/">{{ $site.title }}</a>
      </div>
      <div class="flex items-center">
        <nav-bar class="flex-grow" />
        <social-bar />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@theme/components/NavBar.vue";
import SocialBar from "@theme/components/SocialBar.vue";

export default {
  name: "GlobalHeader",
  components: {
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