<template>
  <div id="post" class="bg-gray-50 bg-opacity-75 text-gray-900">
    <div
      v-if="$frontmatter.image"
      id="hero"
      class="min-w-full bg-no-repeat bg-center bg-cover"
      :style="`background-image: url('${$frontmatter.image}')`"
    ></div>
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
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
#post::-webkit-scrollbar {
  display: none;
}
#post > #hero {
  min-height: 33%;
}
#post > .content__default {
  margin: 0 auto;
  max-width: 80%;
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
  @apply: font-normal text-white text-opacity-0;
}

#post :is(h1, h2, h3, h4, h5, h6) a:hover {
  @apply: text-black text-opacity-100;
}

#post p {
  @apply: font-medium text-lg;
  text-indent: 1rem;
}
</style>
