<template>
  <div
    class="bg-gray-100 bg-opacity-75 text-gray-900 dark:bg-gray-900 dark:bg-opacity-75 dark:text-gray-100"
  >
    <div
      v-if="$frontmatter.image"
      id="hero"
      class="min-w-full bg-no-repeat bg-center bg-cover"
      :style="`background-image: url('${$frontmatter.image}');`"
    ></div>
    <div class="pt-4 flex align-middle">
      <pinterest-save /><facebook-like />
    </div>
    <Content id="post" class="px-8" />
  </div>
</template>

<script>
export default {
  name: "Post",
};
</script>

<style scoped>
#hero {
  min-height: 20vh;
}
</style>

<style lang="stylus">
#post h1 {
  @apply: font-black text-6xl;
}

#post h2 {
  @apply: font-extrabold text-5xl;
}

#post h3 {
  @apply: font-extrabold text-4xl;
}

#post h4 {
  @apply: font-bold text-3xl;
}

#post h5 {
  @apply: font-bold text-2xl;
}

#post h6 {
  @apply: font-semibold text-xl;
}

#post :is(h1, h2, h3, h4, h5, h6) a {
  @apply: font-light text-white text-opacity-0;
}

#post :is(h1, h2, h3, h4, h5, h6) a:hover {
  @apply: text-black text-opacity-100;
}

.dark #post :is(h1, h2, h3, h4, h5, h6) a {
  @apply: text-black text-opacity-0;
}

.dark #post :is(h1, h2, h3, h4, h5, h6) a:hover {
  @apply: text-white text-opacity-100;
}

#post p {
  @apply: font-medium text-lg;
  text-indent: 1rem;
}
</style>
