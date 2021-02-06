<template>
  <div
    id="recipe-card"
    class="shadow-2xl bg-gray-100 bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75"
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
    <div id="header" class="mb-2 flex justify-evenly items-center">
      <div
        v-if="$frontmatter.image"
        class="img"
        :style="`background-image: url('${$frontmatter.image}');`"
      ></div>
      <div class="flex flex-col justify-center items-center">
        <div
          class="rounded-full h-36 w-36 p-5 mb-4 flex flex-col justify-center bg-primary-500 bg-opacity-75 text-text-900"
        >
          <div v-if="cookTime" class="circle__recipe">
            <p>Cooking Time</p>
            <h2 itemprop="totalTime">{{ cookTime }}</h2>
            <meta itemprop="cookingMethod" content="" />
          </div>
          <div v-if="serves" class="circle__recipe">
            <p>Serves</p>
            <h2 itemprop="recipeYield">{{ serves }}</h2>
          </div>
        </div>
        <meta itemprop="name" :content="title" />
        <div
          v-if="!slotPassed"
          class="rounded-full bg-primary-500 bg-opacity-75 text-text-900"
        >
          <h1 class="p-2 font-medium text-xl">{{ title }}</h1>
          <p class="p-2 font-light text-sm">
            {{ description }}
          </p>
        </div>
      </div>
      <div
        v-if="$frontmatter.image"
        class="img"
        :style="`background-image: url('${$frontmatter.image}');`"
      ></div>
    </div>

    <div id="body" class="relative">
      <!-- Menu -->
      <span v-if="ingredients.length > 0 && method.length > 0">
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
      </span>

      <transition-group v-if="slotPassed" name="fade">
        <div
          v-show="open.blog"
          key="blog"
          class="px-8 bg-gray-100 bg-opacity-25 text-gray-900 dark:bg-gray-900 dark:bg-opacity-25 dark:text-gray-100"
        >
          <slot></slot>
        </div>
        <div v-show="open.recipe" key="recipe" class="tab-content">
          <h2 class="capitalize">{{ title }}</h2>
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
#header {
  --square-div: calc((100% / 3));
}

#header div.img {
  @apply: h-0 rounded-full bg-no-repeat bg-center bg-cover;
  padding-bottom: var(--square-div);
  width: var(--square-div);
}

.circle__recipe {
  @apply: flex flex-col justify-center items-center;
  font-family: life-savers-bold, Helvetica, Arial, sans-serif;
}

.circle__recipe > h2 {
  @apply: font-medium text-lg;
}

.circle__recipe > p {
  @apply: font-light text-sm;
}

.tabs {
  @apply: bg-accent-500 bg-opacity-90 sticky text-center top-0 py-2;
}

.tabs > li {
  @apply: inline list-none mr-4 font-semibold;
  font-family: life-savers-regular, Helvetica, Arial, sans-serif;
}

.tabs > li > a {
  @apply: cursor-pointer no-underline select-none text-lg text-gray-700 text-opacity-50;
  transition: var(--transition-duration);
}

.tabs > li > a:hover {
  @apply: text-gray-800 text-opacity-75;
}

.tabs > li > a.active {
  @apply: text-gray-900 text-opacity-100;
}

.tab-content {
  @apply: px-4 text-text-700;
  font-family: life-savers-regular, Helvetica, Arial, sans-serif;
  --step-1: rgba(200, 200, 200, 0.25);
  --step-2: rgba(200, 200, 200, 0.5);
  --step-3: rgba(0, 0, 0, 0.75);
  --step-4: rgba(0, 0, 0, 1);
  background-image: repeating-linear-gradient(var(--step-1), var(--step-2) 1.45rem, var(--step-3) 1.47rem, var(--step-4) 1.5rem);
  background-image: -moz-repeating-linear-gradient(var(--step-1), var(--step-2) 1.45rem, var(--step-3) 1.47rem, var(--step-4) 1.5rem);
  background-image: -ms-repeating-linear-gradient(var(--step-1), var(--step-2) 1.45rem, var(--step-3) 1.47rem, var(--step-4) 1.5rem);
  background-image: -o-repeating-linear-gradient(var(--step-1), var(--step-2) 1.45rem, var(--step-3) 1.47rem, var(--step-4) 1.5rem);
  background-image: -webkit-repeating-linear-gradient(var(--step-1), var(--step-2) 1.45rem, var(--step-3) 1.47rem, var(--step-4) 1.5rem);
  background-position-y: 0.25rem;
}

.dark .tab-content {
  @apply: text-text-300;
  --step-1: rgba(0, 0, 0, 0.25);
  --step-2: rgba(0, 0, 0, 0.5);
  --step-3: rgba(200, 200, 200, 0.75);
  --step-4: rgba(200, 200, 200, 1);
}

.tab-content > h2 {
  @apply: font-extrabold text-xl;
}

.tab-content > h3 {
  @apply: font-bold;
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
  @apply: ml-4 font-semibold;
}
</style>