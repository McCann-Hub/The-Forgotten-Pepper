<template>
  <div
    id="recipe-card"
    class="bg-gray-100 bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75"
    itemscope
    itemtype="http://schema.org/Recipe"
  >
    <meta
      itemprop="url"
      :content="`${$themeConfig.domain || ''}${$page.path}`"
    />
    <meta
      v-for="category in categories"
      :key="category"
      itemprop="recipeCategory"
      :content="category"
    />
    <meta itemprop="recipeCuisine" content="" />
    <meta itemprop="suitableForDiet" content="" />
    <div class="header mb-2 flex justify-evenly items-center">
      <div
        v-if="$frontmatter.image"
        class="img"
        :style="`background-image: url('${$frontmatter.image}');`"
      >
        <meta itemprop="image" :content="$frontmatter.image" />
      </div>
      <div class="flex flex-col justify-center items-center">
        <div
          class="rounded-full h-36 w-36 p-5 mb-4 flex flex-col justify-center bg-primary-500 bg-opacity-75 text-text-900"
        >
          <div v-if="cookTime" class="circle__recipe">
            <p>Cook Time</p>
            <h2>{{ humanizeDuration(cookTime) }}</h2>
            <meta itemprop="cookTime" :content="cookTime" />
            <meta itemprop="cookingMethod" content="" />
            <meta itemprop="totalTime" :content="totalTime" />
          </div>
          <div v-if="serves" class="circle__recipe">
            <p>Serves</p>
            <h2 itemprop="recipeYield">{{ serves }}</h2>
          </div>
        </div>
        <meta itemprop="name" :content="title" />
        <div class="hidden" itemprop="author" itemscope itemtype="http://schema.org/Person">
          <meta itemprop="name" :content="author" />
        </div>
        <meta itemprop="description" :content="description" />
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
        v-if="$frontmatter.image2"
        class="img"
        :style="`background-image: url('${$frontmatter.image2}');`"
      >
        <meta itemprop="image" :content="$frontmatter.image2" />
      </div>
    </div>

    <div class="body relative">
      <!-- menu -->
      <span v-if="ingredients.length > 0 && method.length > 0">
        <ul class="tabs">
          <li>
            <a
              v-if="slotPassed"
              :class="open.blog ? 'active' : ''"
              @click="switchTab('blog')"
              >Blog</a
            >
          </li>
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
      <!-- body -->
      <transition-group
        tag="div"
        name="fade"
        :style="`${tabHeight > 0 ? `height: ${tabHeight}px;` : ''}`"
      >
        <div
          v-show="open.blog"
          key="blog"
          class="px-8 bg-gray-100 bg-opacity-25 text-gray-900 dark:bg-gray-900 dark:bg-opacity-25 dark:text-gray-100"
        >
          <slot></slot>
        </div>
        <div v-show="open.ingredients" key="ingredients" class="tab-content">
          <h2>Ingredients</h2>
          <hr />
          <ul>
            <li
              v-for="(ingredient, i) in ingredients"
              :key="i"
              itemprop="ingredients"
            >
              <meta itemprop="recipeIngredient" :content="ingredient" />
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
import { duration } from "moment";

function parseTime(readable) {
  const parts = readable.split(" ");
  if (parts.length === 1) {
    return readable;
  }
  if (parts.length === 2) {
    return duration(...parts).toISOString();
  }
  return "";
}

export default {
  name: "RecipeCard",
  data: () => ({
    open: {
      blog: false,
      ingredients: false,
      method: false,
    },
    tabHeight: 0,
  }),
  computed: {
    cookTime() {
      return parseTime(((this.$frontmatter || {}).recipe || {}).cookTime || "");
    },
    totalTime() {
      return parseTime(
        ((this.$frontmatter || {}).recipe || {}).totalTime || this.cookTime
      );
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
    author() {
      return (
        ((this.$frontmatter || {}).recipe || {}).author ||
        (this.$themeConfig || {}).author ||
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
    categories() {
      return (
        ((this.$frontmatter || {}).recipe || {}).categories ||
        (this.$frontmatter || {}).menu ||
        []
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
  updated() {
    const newTabHeight = this.$slots.default.reduce(
      (acc, item) => acc + ((item.elm || {}).clientHeight || 0),
      0
    );
    this.tabHeight = Math.max(this.tabHeight, newTabHeight);
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
    humanizeDuration(iso) {
      return duration(iso).humanize({ m: 60 });
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~@theme/styles/fonts.styl';

#recipe-card {
  .header {
    --square-div: calc((100% / 3));

    div {
      &.img {
        @apply: h-0 rounded-full bg-no-repeat bg-center bg-cover;
        padding-bottom: var(--square-div);
        width: var(--square-div);
      }
    }

    img {
      @apply: h-0 rounded-full;
      height: var(--square-div);
      width: var(--square-div);
    }
  }

  .circle__recipe {
    @apply: flex flex-col justify-center items-center font-life-savers-bold;

    h2 {
      @apply: font-medium text-lg;
    }

    p {
      @apply: font-light text-sm;
    }
  }

  .tabs {
    @apply: bg-accent-500 bg-opacity-90 sticky text-center top-0 py-2;
    z-index: 1;

    li {
      @apply: inline list-none mr-4 font-semibold font-pompiere-regular;

      a {
        @apply: cursor-pointer no-underline select-none text-lg text-gray-700 text-opacity-50;
        transition: var(--transition-duration);

        &:hover {
          @apply: text-gray-800 text-opacity-75;
        }

        &.active {
          @apply: text-gray-900 text-opacity-100;
        }
      }
    }
  }

  .tab-content {
    @apply: min-w-full min-h-full px-4 text-text-700 font-life-savers-regular;
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

    h2 {
      @apply: font-extrabold text-xl;
    }

    h3 {
      @apply: font-bold;
    }

    hr {
      @apply: border-red-900 border-opacity-50 w-72;
    }

    ul {
      @apply: list-disc;
    }

    ol {
      @apply: list-decimal;
    }

    li {
      @apply: ml-4 font-semibold;
    }
  }
}

.dark {
  #recipe-card {
    .tab-content {
      @apply: text-text-300;
      --step-1: rgba(0, 0, 0, 0.25);
      --step-2: rgba(0, 0, 0, 0.5);
      --step-3: rgba(200, 200, 200, 0.75);
      --step-4: rgba(200, 200, 200, 1);
    }
  }
}
</style>
