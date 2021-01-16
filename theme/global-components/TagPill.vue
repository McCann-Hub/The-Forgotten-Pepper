<template>
  <div
    class="rounded-full px-3 py-1 text-sm font-semibold cursor-pointer bg-gray-700 text-gray-200 dark:bg-gray-200 dark:text-gray-700"
    @click="$router.push(tag.path)"
  >
    {{ `#${tag.tag}` }}
  </div>
</template>

<script>
export default {
  name: "TagPill",
  props: {
    tag: {
      type: Object,
      required: true,
    },
  },
};
</script>