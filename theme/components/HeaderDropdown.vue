<template>
  <div class="dropdown">
    <button
      class="inline-flex items-center font-semibold capitalize focus:outline-none"
    >
      {{ label }}
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
      class="dropdown-menu rounded absolute hidden z-10 bg-secondary-400 dark:bg-primary-600"
    >
      <li v-for="item in items" :key="item.text">
        <a
          @click="$router.push(item.link || '#')"
          class="block rounded py-2 px-4 capitalize hover:bg-primary-500 dark:hover:bg-secondary-500"
          >{{ item.text }}</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HeaderDropdown",
  props: {
    label: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
/* https://codepen.io/huphtur/pen/ordMeN */
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>