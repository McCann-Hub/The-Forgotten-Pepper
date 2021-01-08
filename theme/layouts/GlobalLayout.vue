<template>
  <div>
    <header class="fixed top-0 w-full z-10">
      <global-header />
    </header>
    <main class="flex justify-center">
      <component v-if="leftSidebar" :is="leftSidebar" class="left-sidebar" />
      <component :is="layout" class="main" />
      <component v-if="rightSidebar" :is="rightSidebar" class="right-sidebar" />
    </main>
    <footer class="fixed bottom-0 w-full"></footer>
  </div>
</template>

<script>
import Vue from "vue";
import { setGlobalInfo } from "@app/util";
import GlobalHeader from "@theme/components/GlobalHeader.vue";

export default {
  name: "GlobalLayout",
  components: {
    GlobalHeader,
  },
  computed: {
    layout() {
      const layout = this.getLayout();
      setGlobalInfo("layout", layout);
      return Vue.component(layout);
    },
    leftSidebar() {
      return this.$frontmatter.leftSidebar || "div";
    },
    rightSidebar() {
      return this.$frontmatter.rightSidebar || "div";
    },
  },
  methods: {
    getLayout() {
      if (this.$page.path) {
        const layout = this.$page.frontmatter.layout;
        if (
          layout &&
          (this.$vuepress.getLayoutAsyncComponent(layout) ||
            this.$vuepress.getVueComponent(layout))
        ) {
          return layout;
        }
        return "Layout";
      }
      return "NotFound";
    },
  },
};
</script>

<style scoped>
header {
  min-height: var(--header-height);
}
main,
main > .left-sidebar,
main > .main,
main > .right-sidebar {
  max-height: var(--main-height);
  min-height: var(--main-height);
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
main::-webkit-scrollbar,
main > .left-sidebar::-webkit-scrollbar,
main > .main::-webkit-scrollbar,
main > .right-sidebar::-webkit-scrollbar {
  display: none;
}
main {
  max-width: 100%;
  min-width: 100%;
}
main > .left-sidebar,
main > .right-sidebar {
  max-width: 20rem;
  min-width: 20rem;
}
main > .main {
  max-width: calc(100% - 40rem);
  min-width: calc(100% - 40rem);
}
footer {
  background-color: black;
  color: white;
  min-height: var(--footer-height);
}
</style>
