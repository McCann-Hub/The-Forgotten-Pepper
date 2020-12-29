<template>
  <div id="overlay">
    <a @click="$emit('close')" class="absolute right-1 top-0 cursor-pointer">
      <svg
        class="fill-current text-gray-500 hover:text-gray-50 w-7 h-7"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 18 18"
      >
        <path
          d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
        />
      </svg>
    </a>
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
  background-color: rgba(0, 0, 0, 0.75); /* Black background with opacity */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
}
</style>