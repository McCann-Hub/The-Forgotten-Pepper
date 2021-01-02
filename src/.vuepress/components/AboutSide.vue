<template>
  <div class="bg-gray-50 bg-opacity-60">
    <div class="profile-image"></div>
    <div class="p-4">
      <h1 class="my-4 text-lg font-semibold">About me</h1>
      <p class="font-medium">
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
  background-image: url("~@assets/melanie.jpg");
  background-position: center -3rem;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 15rem;
  min-width: 20rem;
}
</style>