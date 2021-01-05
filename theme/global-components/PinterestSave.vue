<template>
  <a
    href="https://www.pinterest.com/pin/create/button/"
    :data-pin-save="save"
    :data-pin-do="`button${type}`"
    :data-pin-id="id"
    :data-pin-nopin="nopin"
  >
  </a>
</template>

<script>
export default {
  name: "PinterestSave",
  props: {
    save: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String, // Bookmark or Pin
      default: "Bookmark",
    },
    id: {
      type: String,
    },
    nopin: {
      type: String,
    },
  },
  mounted() {
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://assets.pinterest.com/js/pinit.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "pinterest-jssdk");
  },
};
</script>