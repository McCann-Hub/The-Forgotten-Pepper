<template>
  <div
    id="recipe-card"
    class="bg-gray-50 bg-opacity-50"
    itemscope
    itemtype="http://schema.org/Recipe"
  >
    <meta
      itemprop="url"
      :content="`${$themeConfig.domain || ''}${$page.path}`"
    />
    <meta itemprop="recipeCategory" content="" />
    <meta itemprop="recipeCuisine" content="" />
    <meta itemprop="suitableForDiet" content="" />
    <div
      class="min-w-full bg-no-repeat bg-center bg-cover"
      :style="`background-image: url('${$frontmatter.image}');`"
    >
      <br />
      <div class="circle__recipe">
        <h2 itemprop="totalTime">{{ cookTime }}</h2>
        <p>Cooking Time</p>
        <meta itemprop="cookingMethod" content="" />
      </div>
      <div class="circle__recipe">
        <h2 itemprop="recipeYield">{{ serves }}</h2>
        <p>Serves</p>
      </div>
      <br />
      <div class="description">
        <h1 itemprop="name">{{ title }}</h1>
        <p>
          {{ description }}
        </p>
        <br />
      </div>
    </div>

    <div class="body">
      <!-- Menu -->
      <ul v-if="slotPassed" class="tabs">
        <li>
          <a :class="open.blog ? 'active' : ''" @click="switchTab('blog')"
            >Blog</a
          >
        </li>
        <li>
          <a :class="open.recipe ? 'active' : ''" @click="switchTab('recipe')"
            >Recipe</a
          >
        </li>
      </ul>
      <ul v-else class="tabs">
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

      <transition-group v-if="slotPassed" name="fade">
        <div
          v-show="open.blog"
          key="blog"
          class="bg-gray-50 bg-opacity-25 text-gray-900 px-8"
        >
          <slot></slot>
        </div>
        <div v-show="open.recipe" key="recipe" class="tab-content">
          <h2>Recipe</h2>
          <h3>Ingredients</h3>
          <ul>
            <li
              v-for="(ingredient, i) in ingredients"
              :key="i"
              itemprop="ingredients"
            >
              {{ ingredient }}
            </li>
          </ul>
          <br />
          <h3>Method</h3>
          <ol>
            <li
              v-for="(step, i) in method"
              :key="i"
              itemprop="recipeInstructions"
            >
              {{ step }}
            </li>
          </ol>
        </div>
      </transition-group>
      <transition-group v-else name="fade">
        <div v-show="open.ingredients" key="ingredients" class="tab-content">
          <h2>Ingredients</h2>
          <hr />
          <ul>
            <li
              v-for="(ingredient, i) in ingredients"
              :key="i"
              itemprop="ingredients"
            >
              {{ ingredient }}
            </li>
          </ul>
        </div>
        <div v-show="open.method" key="method" class="tab-content">
          <h2>Method</h2>
          <hr />
          <ol>
            <li
              v-for="(step, i) in method"
              :key="i"
              itemprop="recipeInstructions"
            >
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
      blog: false,
      recipe: false,
      ingredients: false,
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
    slotPassed() {
      return !!(this.$slots.default || [])[0];
    },
  },
  mounted() {
    if (this.slotPassed) {
      this.switchTab("blog");
    } else {
      this.switchTab("ingredients");
    }
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
  transition-property: opacity;
  transition-duration: var(--transition-duration);
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

.body {
  @apply: relative;
}

.tabs {
  @apply: bg-gray-400 bg-opacity-90 sticky text-center top-0;
}

.tabs > li {
  @apply: inline list-none mr-4;
}

.tabs > li > a {
  @apply: cursor-pointer no-underline select-none text-gray-500 text-opacity-50;
  transition: var(--transition-duration);
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

.tab-content > h3 {
  @apply: font-semibold;
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