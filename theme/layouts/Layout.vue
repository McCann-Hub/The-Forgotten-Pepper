<template>
  <component :is="layoutComponent" />
</template>

<script>
import IndexPost from "./IndexPost.vue";
import Post from "./Post.vue";

export default {
  name: "Layout",
  components: {
    IndexPost,
    Post,
  },
  computed: {
    layoutComponent() {
      if (this.$pagination) {
        return IndexPost;
      }
      return this.$frontmatter.layout || "Content";
    },
  },
};
</script>