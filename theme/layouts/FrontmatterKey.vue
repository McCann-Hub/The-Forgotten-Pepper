<template>
  <div class="flex flex-wrap justify-evenly items-center">
    <div v-for="tag in $frontmatterKey.list" :key="tag.name">
      <tag-pill :tag="tag" />
    </div>
  </div>
</template>

<script>
export default {
  name: "FrontmatterKey",
};
</script>