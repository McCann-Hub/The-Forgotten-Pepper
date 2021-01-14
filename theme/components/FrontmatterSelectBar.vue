<template>
  <div class="w-1/3 flex justify-between">
    <frontmatter-select
      v-for="frontmatter in ($themeConfig || {}).frontmatters || []"
      :key="frontmatter.id"
      :frontmatter="frontmatter"
      class="w-1/3"
    />
  </div>
</template>

<script>
import FrontmatterSelect from "@theme/components/FrontmatterSelect.vue";

export default {
  name: "FrontmatterSelectBar",
  components: {
    FrontmatterSelect,
  },
};
</script>