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
        default: true
    },
    size: {
      type: String, // small or large
      default: "small",
    },
  },
  mounted() {
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  },
};
</script>