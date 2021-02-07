<template>
  <div
    class="min-h-full min-w-full flex justify-center bg-gray-100 bg-opacity-50"
  >
    <div class="flex flex-col justify-center">
      <h1 class="text-center text-5xl font-bold">Oops</h1>
      <img src="@theme/assets/notFound.png" />
      <p class="text-center text-3xl font-semibold">
        It looks like this page needs a bit more time in the oven
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>
