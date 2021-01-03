<template>
  <div id="recipe-card" class="bg-gray-50 bg-opacity-50">
    <div
      class="min-w-full bg-no-repeat bg-center bg-cover"
      :style="`background-image: url('${$frontmatter.image}');`"
    >
      <br />
      <div class="circle__recipe">
        <h2>{{ cookTime }}</h2>
        <p>Cooking Time</p>
      </div>
      <div class="circle__recipe">
        <h2>{{ serves }}</h2>
        <p>Serves</p>
      </div>
      <br />
      <div class="description">
        <h1>{{ title }}</h1>
        <p>
          {{ description }}
        </p>
        <br />
      </div>
    </div>

    <div class="content">
      <!-- Menu -->
      <ul class="tabs">
        <li>
          <a
            :class="open.ingredients ? 'active' : ''"
            @click="switchTab('ingredients')"
            >Ingredients</a
          >
        </li>
        <li>
          <a :class="open.method ? 'active' : ''" @click="switchTab('method')"
            >Method</a
          >
        </li>
      </ul>

      <transition-group name="fade">
        <div v-show="open.ingredients" key="ingredients" class="tab-content">
          <h2>Ingredients</h2>
          <hr />
          <ul>
            <li v-for="(ingredient, i) in ingredients" :key="i">
              {{ ingredient }}
            </li>
          </ul>
        </div>

        <div v-show="open.method" key="method" class="tab-content">
          <h2>Method</h2>
          <hr />
          <ol>
            <li v-for="(step, i) in method" :key="i">
              {{ step }}
            </li>
          </ol>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecipeCard",
  data: () => ({
    open: {
      ingredients: true,
      method: false,
    },
  }),
  computed: {
    cookTime() {
      return ((this.$frontmatter || {}).recipe || {}).cookTime || "";
    },
    serves() {
      return ((this.$frontmatter || {}).recipe || {}).serves || "";
    },
    title() {
      return (
        ((this.$frontmatter || {}).recipe || {}).title ||
        (this.$page || {}).title ||
        ""
      );
    },
    description() {
      return (
        ((this.$frontmatter || {}).recipe || {}).description ||
        (this.$frontmatter || {}).description ||
        ""
      );
    },
    ingredients() {
      return ((this.$frontmatter || {}).recipe || {}).ingredients || [];
    },
    method() {
      return ((this.$frontmatter || {}).recipe || {}).method || [];
    },
  },
  methods: {
    switchTab(to) {
      Object.keys(this.open).forEach((k) => {
        if (k === to) {
          this.open[k] = true;
        } else {
          this.open[k] = false;
        }
      });
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  position: absolute;
  max-width: 20rem;
  transition-property: opacity;
  transition-duration: 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

<style lang="stylus" scoped>
.circle__recipe {
  @apply: bg-yellow-400 bg-opacity-80 m-1 w-20 h-20 rounded-full flex flex-col justify-center items-center text-center;
}

.circle__recipe > h2 {
  @apply: font-medium text-lg;
}

.circle__recipe > p {
  @apply: font-light text-sm;
}

.description {
  @apply: bg-gray-900 bg-opacity-20 text-gray-100;
}

.description > h1 {
  @apply: p-2 font-medium text-xl;
}

.description > p {
  @apply: p-2 font-light text-sm;
}

.tabs {
  @apply: text-center;
}

.tabs > li {
  @apply: inline list-none mr-4;
}

.tabs > li > a {
  @apply: cursor-pointer no-underline select-none text-gray-100 text-opacity-50;
  transition: 0.5s;
}

.tabs > li > a:hover {
  @apply: text-gray-500 text-opacity-75;
}

.tabs > li > a.active {
  @apply: text-gray-900 text-opacity-100;
}

.tab-content {
  @apply: px-4;
  background: repeating-linear-gradient(rgba(200, 200, 200, 0.5), rgba(200, 200, 200, 0.75) 1.45rem, rgba(0, 0, 0, 0.75) 1.47rem, rgba(0, 0, 0, 1) 1.5rem);
  background: -moz-repeating-linear-gradient(rgba(200, 200, 200, 0.5), rgba(200, 200, 200, 0.75) 1.45rem, rgba(0, 0, 0, 0.75) 1.47rem, rgba(0, 0, 0, 1) 1.5rem);
  background: -ms-repeating-linear-gradient(rgba(200, 200, 200, 0.5), rgba(200, 200, 200, 0.75) 1.45rem, rgba(0, 0, 0, 0.75) 1.47rem, rgba(0, 0, 0, 1) 1.5rem);
  background: -o-repeating-linear-gradient(rgba(200, 200, 200, 0.5), rgba(200, 200, 200, 0.75) 1.45rem, rgba(0, 0, 0, 0.75) 1.47rem, rgba(0, 0, 0, 1) 1.5rem); 
  background: -webkit-repeating-linear-gradient(rgba(200, 200, 200, 0.5), rgba(200, 200, 200, 0.75) 1.45rem, rgba(0, 0, 0, 0.75) 1.47rem, rgba(0, 0, 0, 1) 1.5rem); 
  background-position-y: 0.25rem;
}

.tab-content > h2 {
  @apply: font-medium text-xl;
}

.tab-content > hr {
  @apply: border-red-900 border-opacity-50 w-72;
}

.tab-content > ul {
  @apply: list-disc;
}

.tab-content > ol {
  @apply: list-decimal;
}

.tab-content li {
  @apply: ml-4;
}
</style>