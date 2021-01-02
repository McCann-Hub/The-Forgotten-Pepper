<template>
  <div class="min-h-full min-w-full flex justify-center">
    <not-found />
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    NotFound: () => import('@theme/layouts/404.vue'),
  },
  computed: {
    posts() {
      return (this.$site.pages || []).filter((p) => p.id === "post");
    },
  },
};
</script>
