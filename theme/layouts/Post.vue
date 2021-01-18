<template>
  <div
    class="bg-primary-200 bg-opacity-75 text-text-800 dark:bg-primary-800 dark:bg-opacity-75 dark:text-text-200"
  >
    <div
      v-if="$frontmatter.image"
      id="hero"
      class="min-w-full bg-no-repeat bg-center bg-cover"
      :style="`background-image: url('${$frontmatter.image}');`"
    ></div>
    <div class="pt-4 flex align-middle">
      <pinterest-save /><facebook-like />
    </div>
    <div class="font-thin text-xs">
      <span>{{
        `published: ${new Date(
          $frontmatter.date || $page.created
        ).toLocaleDateString()}`
      }}</span>
      <br />
      <span v-if="$page.lastUpdated">{{
        `updated: ${$page.lastUpdated}`
      }}</span>
    </div>
    <Content id="post" class="px-8" />
  </div>
</template>

<script>
export default {
  name: "Post",
};
</script>

<style scoped>
#hero {
  min-height: 20vh;
}
</style>
