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
      v-for="(item, i) in ($themeConfig || {}).social || []"
      :key="item.text || i"
      class="px-1"
    >
      <nav-link class="social-bar-item" :link="item.link">
        <component
          v-if="item.icon"
          :is="getComponentName(item.icon)"
        />
        <span v-else class="text-xs">{{ item.text }}</span>
      </nav-link>
    </div>
  </div>
</template>

<script>
// https://stackoverflow.com/questions/54344164/how-to-import-all-vue-components-from-a-folder
const ComponentContext = require.context("./social", true, /\.vue$/i, "lazy");

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
  components: ComponentContext.keys().reduce((acc, componentFilePath) => {
    const componentName = componentFilePath.split("/").pop().split(".")[0];
    acc[componentName] = () => ComponentContext(componentFilePath);
    return acc;
  }, {}),
  methods: {
    getComponentName(configIcon) {
      const name = configIcon.replace(/icon/i, "");
      return `${name.charAt(0).toUpperCase()}${name.slice(1)}Icon`;
    },
  },
};
</script>