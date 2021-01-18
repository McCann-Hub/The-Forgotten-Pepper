<template>
  <div
    class="rounded-full px-3 py-1 text-sm font-semibold cursor-pointer bg-primary-700 text-text-200 dark:bg-primary-200 dark:text-text-700"
    @click="$router.push(tag.path)"
  >
    {{ `#${tag.tag || tag.name}` }}
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