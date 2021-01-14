<template>
  <div>
    <frontmatter-multi-select v-if="allowMultiple" :frontmatter="frontmatter" />
    <div v-else class="dropdown">
      <button class="inline-flex items-center font-semibold capitalize focus:outline-none">
        {{ selectLabel }}
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
        class="dropdown-menu rounded absolute hidden z-10 bg-gray-200 dark:bg-gray-800"
      >
        <li
          v-for="option in selectOptions"
          :key="option.key"
          class="block rounded py-2 px-4 hover:bg-gray-400 dark:hover:bg-gray-500"
        >
          <div @click="$router.push(option.path)" class="flex items-center">
            <!-- Selected: "font-semibold", Not Selected: "font-normal" -->
            <span class="ml-3 block font-normal capitalize truncate">
              {{ cleanKey(option.key) }}
            </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import FrontmatterSelect from "../mixins/FrontmatterSelect.js";
import FrontmatterMultiSelect from "@theme/components/FrontmatterMultiSelect.vue";

export default {
  name: "FrontmatterSelect",
  mixins: [FrontmatterSelect],
  components: {
    FrontmatterMultiSelect,
  },
};
</script>

<style scoped>
/* https://codepen.io/huphtur/pen/ordMeN */
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>