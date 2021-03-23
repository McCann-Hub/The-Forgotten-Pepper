<template>
  <div class="flex flex-col items-center bg-gray-100 font-life-savers-regular">
    <div class="profile-image rounded-full"></div>
    <div class="p-4">
      <h1 class="my-4 text-2xl font-semibold">About Me</h1>
      <p class="text-xl font-medium">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
        nihil. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem
        praesentium nihil.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutSide",
};
</script>

<style scoped>
.profile-image {
  background-image: url("~@assets/about-me.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  max-height: 15rem;
  min-height: 15rem;
  max-width: 15rem;
  min-width: 15rem;
}
</style>