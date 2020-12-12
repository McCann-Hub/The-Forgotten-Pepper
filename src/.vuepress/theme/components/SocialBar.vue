<template>
  <div
    :class="[
      'pr-1',
      'flex-shrink',
      'flex',
      { 'justify-start': left, 'justify-end': right },
    ]"
  >
    <div v-for="item in $themeConfig.social" :key="item.text" class="px-1">
      <component
        v-if="item.component"
        :is="item.component"
        :link="item.link"
        :icon="item.icon"
        :text="item.text"
      />
      <a
        v-else
        :href="item.link"
        target="_blank" 
        rel="noopener noreferrer"
      >
        <!--
          target="_blank" to open the link in a new tab
          rel="noopener noreferrer" to prevent a type of phishing known as tabnabbing
         -->
        <i v-if="item.icon" :class="item.icon"></i>
        <span v-else>{{ item.text }}</span>
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