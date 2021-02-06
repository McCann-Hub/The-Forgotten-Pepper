<template>
  <div
    :class="`rounded-3xl overflow-hidden shadow-md flex ${
      vertical ? 'flex-col vertical-card' : 'horizontal-card'
    }`"
    :style="`${vertical ? '' : ''}`"
  >
    <div
      v-if="page.frontmatter.image"
      id="hero"
      class="bg-no-repeat bg-center bg-cover"
      :style="`background-image: url('${page.frontmatter.image}')`"
    ></div>
    <div class="w-full flex flex-col justify-between page-card">
      <div class="px-3 py-2">
        <div class="mb-2">
          <div class="font-bold text-xl">
            <nav-link :link="page.path">{{ page.title }}</nav-link>
          </div>
          <div class="font-thin text-xs">
            <span>{{
              `published: ${new Date(
                page.frontmatter.date || page.created
              ).toLocaleDateString()}`
            }}</span>
            <br />
            <span v-if="page.lastUpdated">{{
              `updated: ${page.lastUpdated}`
            }}</span>
          </div>
        </div>
        <p class="font-medium text-base select-none truncate-overflow">
          {{ page.frontmatter.summary || page.summary }}
        </p>
      </div>
      <div v-if="!hideTags" class="px-3 py-2">
        <tag-pill
          v-for="tag in tags"
          :key="tag.tag"
          :tag="tag"
          class="inline-block mt-2 mr-2"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageCard",
  props: {
    orientation: {
      type: String,
      default: "vertical",
    },
    page: {
      type: Object,
      default: () => {},
    },
    hideTags: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    vertical() {
      return this.orientation.toUpperCase() == "VERTICAL";
    },
    horizontal() {
      return this.orientation.toUpperCase() == "HORIZONTAL";
    },
    tags() {
      return ((this.$themeConfig || {}).frontmatters || [])
        .reduce((acc, el) => {
          acc.push(
            ...el.keys.map((k) => ({
              key: k,
              path: el.path,
            }))
          );
          return acc; // have to return the accumulator because push only returns the count
        }, [])
        .reduce((acc, el) => {
          const tag = this.page.frontmatter[el.key];
          if (tag) {
            if (Array.isArray(tag)) {
              acc.push(
                ...tag.map((t) => ({
                  tag: t,
                  path: `${el.path}${t}/`,
                }))
              );
            } else {
              acc.push({
                tag,
                path: `${el.path}${tag}/`,
              });
            }
          }
          return acc;
        }, []);
    },
  },
};
</script>

<style scoped>
.vertical-card {
  max-width: 20rem;
  min-width: 20rem;
}
.horizontal-card {
  max-height: 15rem;
  min-height: 15rem;
  max-width: 80%;
  min-width: 80%;
}
#hero {
  min-height: 15rem;
  min-width: 20rem;
}
.truncate-overflow {
  --max-lines: 3;
  --lh: 1.75rem; /* html line height */
  max-height: calc(var(--lh) * var(--max-lines));
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--max-lines);
}
</style>