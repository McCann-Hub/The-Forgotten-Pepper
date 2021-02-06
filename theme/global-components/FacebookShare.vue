<template>
  <div
    class="fb-share-button"
    :data-href="`${$themeConfig.domain || ''}${$page.path}`"
    :data-layout="layout"
    :data-size="size"
  ></div>
</template>

<script>
import Facebook from "../mixins/facebook.js";

export default {
  name: "FacebookShare",
  props: {
    layout: {
      type: String, // button_count, button or box_count
      default: "button",
    },
    size: {
      type: String, // small or large
      default: "small",
    },
  },
  mixins: [Facebook],
};
</script>