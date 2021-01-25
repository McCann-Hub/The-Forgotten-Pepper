<template>
  <recipe-card>
    <div class="pt-4">
      <pinterest-save />
      <facebook-share />
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
    <Content />
  </recipe-card>
</template>

<script>
export default {
  name: "Post",
};
</script>

