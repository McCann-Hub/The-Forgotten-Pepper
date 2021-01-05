<template>
  <div
    class="fb-share-button"
    :data-href="`${$themeConfig.domain || ''}${$page.path}`"
    :data-layout="layout"
    :data-size="size"
  ></div>
</template>

<script>
export default {
  name: "FacebookShare",
  props: {
    layout: {
      type: String,
      default: "button",
    },
    size: {
      type: String,
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