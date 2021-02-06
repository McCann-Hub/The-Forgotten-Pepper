<template>
  <div
    class="fb-like"
    :data-action="action"
    :data-colorscheme="colorscheme"
    :data-href="`${$themeConfig.domain || ''}${$page.path}`"
    :data-layout="layout"
    :data-size="size"
    :data-share="share"
  ></div>
</template>

<script>
import Facebook from "../mixins/facebook.js";

export default {
  name: "FacebookLike",
  props: {
    action: {
      type: String, // like or recommend
      default: "like",
    },
    colorscheme: {
      type: String, // light or dark
      default: "light",
    },
    layout: {
      type: String, // standard, button_count, button or box_count
      default: "standard",
    },
    share: {
      type: Boolean,
      default: true,
    },
    size: {
      type: String, // small or large
      default: "small",
    },
  },
  mixins: [Facebook],
};
</script>