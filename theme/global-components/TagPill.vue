<template>
  <nav-link
    class="rounded-full px-3 py-1 text-sm font-semibold cursor-pointer tag-pill"
    :link="tag.path"
  >
    {{ `#${tag.tag || tag.name}` }}
  </nav-link>
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