<template>
  <div class="mt-11 flex flex-col items-center font-life-savers-regular">
    <nav-link link="/about-us#about-me">
      <div class="profile-image rounded-full"></div>
    </nav-link>
    <div class="p-4">
      <h1 class="my-4 text-2xl font-semibold">About Me</h1>
      <p class="text-xl font-medium">
        Hey!
        <br />
        I'm a wife and a mom, more specifically, I'm human- funny, sarcastic,
        and sassy. When I’m not watching shows or playing phone games, I’m
        cooking up some ideas, mostly food related. Welcome to
        <b>The Forgotten Pepper</b> where I share recipes for ingredients
        forgotten about, and new ingredients to try! Want to <nav-link link="/about-us#about-me">learn more?</nav-link>
        <br />
        Thank you for stopping by, Love.
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
  background-image: url("~@assets/about-me/image1.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  max-height: 15rem;
  min-height: 15rem;
  max-width: 15rem;
  min-width: 15rem;
}
</style>