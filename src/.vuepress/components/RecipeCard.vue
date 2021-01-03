<template>
  <div class="bg-gray-50 bg-opacity-60">
    <div
      class="min-w-full bg-no-repeat bg-center bg-cover"
      :style="`background-image: url('${$frontmatter.image}')`"
    >
      <br />
      <div class="circle__recipe">
        <h2>1h</h2>
        <p>Cooking Time</p>
      </div>
      <div class="circle__recipe">
        <h2>12</h2>
        <p>Serves</p>
      </div>
      <br />
      <div class="description">
        <h1>Portuguese custard tarts</h1>
        <p>
          These little beauties are easier and quicker than a trip to the
          bakery. They're almost too easy.
        </p>
        <br />
      </div>
    </div>

    <div class="content">
      <!-- Menu -->
      <ul class="tabs">
        <li>
          <a
            href="javascript:void(0)"
            class="tablinks"
            @click="switchTab('ingredients')"
            id="defaultOpen"
            >Ingredients</a
          >
        </li>
        <li>
          <a
            href="javascript:void(0)"
            class="tablinks"
            @click="switchTab('method')"
            >Method</a
          >
        </li>
      </ul>

      <div v-show="open.ingredients" class="tabcontent">
        <h2>Ingredients</h2>
        <hr />
        <ul>
          <li v-for="(ingredient, i) in ingredients" :key="i">
            {{ ingredient }}
          </li>
        </ul>
      </div>

      <div v-show="open.method" class="tabcontent">
        <h2>Method</h2>
        <hr />
        <ol>
          <li v-for="(step, i) in method" :key="i">
            {{ step }}
          </li>
        </ol>
      </div>
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
    @apply: p-2 font-light text-sm
}
</style>