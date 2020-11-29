<template>
  <div id="app" class="h-screen">
    <NotFound/>
  </div>
</template>

<script>
import NotFound from './views/NotFound.vue'

export default {
  name: 'App',
  components: {
    NotFound
  }
}
</script>

<style>
/* Inter font from Google Fonts */
@import url('https://fonts.googleapis.com/css?family=Inter:400,500,600,700,900&display=swap');

/* tailwind imports */
@tailwind base;
@tailwind components;
@tailwind utilities;

#app {
  font-family: Inter, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
