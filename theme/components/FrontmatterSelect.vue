<template>
  <div>
    <frontmatter-multi-select v-if="allowMultiple" :frontmatter="frontmatter" />
    <header-dropdown v-else :label="selectLabel" :items="selectOptions" />
  </div>
</template>

<script>
import FrontmatterSelect from "../mixins/frontmatterSelect.js";
import HeaderDropdown from "./HeaderDropdown.vue";
import FrontmatterMultiSelect from "@theme/components/FrontmatterMultiSelect.vue";

export default {
  name: "FrontmatterSelect",
  mixins: [FrontmatterSelect],
  components: {
    HeaderDropdown,
    FrontmatterMultiSelect,
  },
};
</script>
