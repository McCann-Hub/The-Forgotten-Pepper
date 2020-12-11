<template>
  <div class="h-full flex items-center">
    <div class="flex-grow flex flex-col">
      <div>
        <h1 class="text-center text-5xl font-bold">Oops</h1>
      </div>
      <div class="flex justify-center">
        <img src="../assets/notFound.png" />
      </div>
      <div>
        <p class="text-center text-3xl font-semibold">
          It looks like this site needs a bit more time in the oven
        </p>
        <!--p class="text-center text-3xl font-semibold">
          It looks like this page needs a bit more time in the oven
        </p-->
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>