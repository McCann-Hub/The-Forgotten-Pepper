<template>
  <div id="overlay" class="flex flex-col">
    <div class="bg-white bg-opacity-50 flex justify-end content-center pr-4">
      <a @click="$emit('close')">
        <!-- Heroicon name: x -->
        <svg
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </a>
    </div>
    <ingredient :pages="pages" />
  </div>
</template>

<script>
import Ingredient from "@theme/layouts/Ingredient.vue";

export default {
  name: "IngredientOverlayout",
  props: {
    pages: Array,
    default: () => [],
  },
  components: {
    Ingredient,
  },
};
</script>

<style scoped>
#overlay {
  position: fixed; /* Sit on top of the page content */
  width: 100%; /* Full width (cover the whole page) */
  max-height: var(--main-height);
  min-height: var(--main-height);
  top: var(--header-height);
  left: 0;
  right: 0;
  bottom: var(--footer-height);
  background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
}
</style>