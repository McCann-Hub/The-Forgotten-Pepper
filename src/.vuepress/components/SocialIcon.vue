<template>
  <a
    :href="link"
    class="flex content-center"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i v-if="icon" :class="['h-4', 'w-4', icon]"></i>
    <span v-else class="text-xs">{{ text }}</span>
  </a>
</template>

<script>
export default {
  name: "Icon",
  props: ["link", "icon", "text"],
  inheritAttrs: false, // https://vuejs.org/v2/guide/components-props#Disabling-Attribute-Inheritance
};
</script>