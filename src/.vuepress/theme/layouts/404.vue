<template>
  <App>
    <div class="h-full flex flex-col content-center justify-center">
      <h1 class="text-center text-5xl font-bold">Oops</h1>
      <div class="flex flex-row justify-center">
        <img src="@theme/assets/notFound.png" />
      </div>
      <p class="text-center text-3xl font-semibold">
        It looks like this site needs a bit more time in the oven
      </p>
      <!--p class="text-center text-3xl font-semibold">
            It looks like this page needs a bit more time in the oven
        </p-->
    </div>
  </App>
</template>

<script>
import App from "@theme/components/App.vue";

export default {
  name: "NotFound",
  components: {
    App,
  },
};
</script>