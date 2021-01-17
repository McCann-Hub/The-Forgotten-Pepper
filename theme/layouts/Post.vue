<template>
  <div
    class="bg-gray-100 bg-opacity-75 text-gray-900 dark:bg-gray-900 dark:bg-opacity-75 dark:text-gray-100"
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
