<template>
  <div class="notFound flex justify-center">
    <div class="flex flex-col justify-center">
      <h1 class="text-center text-5xl font-bold">Oops</h1>
      <img src="@theme/assets/notFound.png" />
      <p class="text-center text-3xl font-semibold">
        It looks like this site needs a bit more time in the oven
      </p>
      <!--p class="text-center text-3xl font-semibold">
        It looks like this page needs a bit more time in the oven
      </p-->
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
.notFound {
  background-color: rgba(255, 255, 255, 0.5);
  min-height: var(--main-height);
}
</style>