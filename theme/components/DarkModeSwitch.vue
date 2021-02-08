<template>
  <button class="focus:outline-none" @click="onModeSwitch">
    <div class="h-4 w-4 relative">
      <transition-group name="zoom">
        <div v-if="dark" key="dark">
          <svg
            class="h-4 w-4 rounded-full"
            fill="currentColor"
            stroke="currentColor"
            focusable="false"
            viewBox="0 0 960 960"
          >
            <g>
              <circle cx="476" cy="480" r="458" fill-opacity=".25"></circle>
              <path
                d="M382 33C82 91-118 488 115 767c186 223 492 255 716 9a515 515 0 01-421-243c-94-157-56-368-28-500z"
              ></path>
            </g>
          </svg>
        </div>
        <div v-else key="light">
          <svg
            class="h-4 w-4 rounded-full"
            fill="currentColor"
            stroke="currentColor"
            focusable="false"
            viewBox="0 0 960 960"
          >
            <g>
              <circle cx="479.5" cy="480.5" r="242"></circle>
              <path
                d="M480 800c22 0 40 18 40 40v80a40 40 0 01-80 0v-80c0-22 18-40 40-40zm480-320c0 22-18 40-40 40h-80a40 40 0 010-80h80c22 0 40 18 40 40zM706 763l57 56a40 40 0 1056-56l-56-57a40 40 0 10-57 57zm-509 56l57-56a40 40 0 10-57-57l-56 57a40 40 0 1056 56zm-77-379a40 40 0 010 80H40a40 40 0 010-80h80zm21-243l56 57a40 40 0 1057-57l-57-56a40 40 0 10-56 56zm622 57l56-57a40 40 0 10-56-56l-57 56a40 40 0 1057 57zM440 40v80a40 40 0 0080 0V40a40 40 0 00-80 0z"
              ></path>
            </g>
          </svg>
        </div>
      </transition-group>
    </div>
  </button>
</template>

<script>
export default {
  name: "DarkModeSwitch",
  data: () => ({
    dark: false,
  }),
  mounted() {
    const localPrefersColorScheme = localStorage.getItem(
      "prefers-color-scheme"
    );
    let osPrefersColorScheme = this.$themeConfig.dark ? "dark" : "light";
    if (window.matchMedia) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        osPrefersColorScheme = "dark";
      } else {
        osPrefersColorScheme = "light";
      }
    }
    const dark = (localPrefersColorScheme || osPrefersColorScheme) == "dark";
    this.dark = dark;
    this.setDarkClass(dark);
  },
  methods: {
    setDarkClass(isDark) {
      if (isDark) {
        document.querySelector("html").classList.add("dark");
      } else {
        document.querySelector("html").classList.remove("dark");
      }
    },
    onModeSwitch() {
      const dark = !this.dark;
      this.dark = dark;
      const prefersColorScheme = dark ? "dark" : "light";
      localStorage.setItem("prefers-color-scheme", prefersColorScheme);
      this.setDarkClass(dark);
    },
  },
};
</script>

<style scoped>
@keyframes zoom {
  0% {
    transform: scale(1.2);
  }
  50% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1.2);
  }
}

.zoom-enter-active,
.zoom-leave-active {
  animation: zoom var(--transition-duration) ease-out forwards;
  position: absolute;
  transition-property: opacity;
  transition-duration: var(--transition-duration);
}
.zoom-enter,
.zoom-leave-to {
  opacity: 0;
}
</style>