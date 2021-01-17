<template>
  <recipe-card>
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
    <Content id="post" />
  </recipe-card>
</template>

<script>
export default {
  name: "Post",
};
</script>

