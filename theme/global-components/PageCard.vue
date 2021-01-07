<template>
  <div
    :class="`rounded-lg overflow-hidden shadow-lg flex ${
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
    <div
      class="w-full flex flex-col justify-between bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-50"
    >
      <div class="px-3 py-2">
        <div class="mb-2">
          <div class="font-bold text-xl">
            <a :href="page.path">{{ page.title }}</a>
          </div>
          <div class="font-thin text-xs">
            <span>{{ `published: ${page.created}` }}</span>
            <br />
            <span>{{ `updated: ${page.lastUpdated}` }}</span>
          </div>
        </div>
        <p class="font-medium text-base select-none truncate-overflow">
          {{ page.frontmatter.summary || page.summary }}
        </p>
      </div>
      <div class="px-3 py-2">
        <a
          v-for="tag in this.tags"
          :key="tag.tag"
          class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 bg-gray-700 text-gray-200 dark:bg-gray-200 dark:text-gray-700"
          :href="tag.path"
          >{{ `#${tag.tag}` }}</a
        >
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
                  path: `${el.path}${t}`,
                }))
              );
            } else {
              acc.push({
                tag,
                path: `${el.path}${tag}`,
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
  --lh: 24px; /* html line height */
  max-height: calc(var(--lh) * var(--max-lines));
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--max-lines);
}
</style>