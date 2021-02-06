<template>
  <div
    class="fb-save"
    :data-uri="`${$themeConfig.domain || ''}${$page.path}`"
    :data-size="size"
  ></div>
</template>

<script>
import Facebook from "../mixins/facebook.js";

export default {
  name: "FacebookSave",
  props: {
    size: {
      type: String,
      default: "small",
    },
  },
  mixins: [Facebook],
};
</script>