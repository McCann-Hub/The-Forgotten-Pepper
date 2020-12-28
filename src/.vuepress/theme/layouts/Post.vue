<template>
  <div id="post" class="bg-white bg-opacity-75">
    <Content />
  </div>
</template>

<script>
export default {
  name: "Post",
};
</script>

<style scoped>
#post {
  min-height: var(--main-height);
  overflow-y: scroll;
  padding: 0 1rem;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>