<template>
  <div
    :class="[
      'pr-1',
      'flex-shrink',
      'flex',
      { 'justify-start': left, 'justify-end': right },
    ]"
  >
    <div
      v-for="item in ($themeConfig || {}).social || []"
      :key="item.text"
      class="px-1"
    >
      <!-- https://vuejs.org/v2/guide/components-props.html#Passing-the-Properties-of-an-Object -->
      <component v-if="item.component" :is="item.component" v-bind="item" />
      <a
        v-else
        :href="item.link"
        class="flex content-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        <!--
          target="_blank" to open the link in a new tab
          rel="noopener noreferrer" to prevent a type of phishing known as tabnabbing
         -->
        <i v-if="item.icon" :class="['h-4', 'w-4', item.icon]"></i>
        <span v-else class="text-xs">{{ item.text }}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "SocialBar",
  props: {
    left: {
      type: Boolean,
      default: false,
    },
    right: {
      type: Boolean,
      default: true,
    },
  },
};
</script>