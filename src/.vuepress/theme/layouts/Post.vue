<template>
  <recipe-card class="pb-7">
    <div class="pt-4">
      <pinterest-save />
      <facebook-share />
    </div>
    <div class="py-2 font-pompiere-regular font-thin text-sm">
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
    <br />
    <br />
    <comments-remarkbox />
  </recipe-card>
</template>

<script>
export default {
  name: "Post",
};
</script>

