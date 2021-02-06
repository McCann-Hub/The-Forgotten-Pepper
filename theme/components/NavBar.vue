<template>
  <div class="flex justify-around">
    <div v-for="item in ($themeConfig || {}).nav || []" :key="item.text">
      <header-dropdown
        v-if="item.items"
        :label="item.text"
        :items="item.items"
      />
      <nav-link v-else :link="item.link">
        <button class="font-semibold capitalize focus:outline-none">
          {{ item.text }}
        </button>
      </nav-link>
    </div>
  </div>
</template>

<script>
import HeaderDropdown from "./HeaderDropdown.vue";

export default {
  name: "NavBar",
  components: {
    HeaderDropdown,
  },
};
</script>
