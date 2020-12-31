<template>
  <div class="flex justify-around">
    <div
      v-for="item in $themeConfig.nav"
      :key="item.text"
      :class="item.items ? 'dropdown' : ''"
    >
      <button
        v-if="item.items"
        class="inline-flex items-center font-semibold focus:outline-none"
      >
        {{ item.text }}
        <svg
          class="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
          />
        </svg>
      </button>
      <ul
        v-if="item.items"
        :class="`dropdown-menu rounded absolute hidden z-10 ${
          $themeConfig.dark ? 'bg-gray-800' : 'bg-gray-200'
        }`"
      >
        <li v-for="mitem in item.items" :key="mitem.text">
          <a
            :href="mitem.link || '#'"
            :class="`block rounded py-2 px-4 ${
              $themeConfig.dark ? 'hover:bg-gray-500' : 'hover:bg-gray-400'
            }`"
            >{{ mitem.text }}</a
          >
        </li>
      </ul>
      <a v-else :href="item.link || '#'">
        <button class="font-semibold focus:outline-none">
          {{ item.text }}
        </button>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
/* https://codepen.io/huphtur/pen/ordMeN */
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>