<template>
  <div>
    <frontmatter-multi-select v-if="allowMultiple" :frontmatter="frontmatter" />
  </div>
</template>

<script>
import FrontmatterSelect from "../mixins/FrontmatterSelect.js";
import FrontmatterMultiSelect from "@theme/components/FrontmatterMultiSelect.vue";

export default {
  name: "FrontmatterSelect",
  mixins: [FrontmatterSelect],
  components: {
    FrontmatterMultiSelect,
  },
};
</script>