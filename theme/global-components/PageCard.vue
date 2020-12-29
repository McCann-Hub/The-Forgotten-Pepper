<template>
  <div
    :class="`bg-white rounded-lg overflow-hidden shadow-lg flex ${
      vertical ? 'flex-col max-w-xs' : ''
    }`"
  >
    <img
      :class="`${vertical ? 'w-full' : 'w-1/5'}`"
      src="https://web2tailwind.com/assets/docs/master/image-01.jpg"
      alt="Sunset in the mountains"
    />
    <div class="flex flex-col">
      <div class="px-3 py-2">
        <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p class="text-gray-700 text-base truncate-overflow">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem
          praesentium nihil.
        </p>
      </div>
      <div class="px-3 py-2">
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >#photography</span
        >
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >#travel</span
        >
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
          >#winter</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageCard",
  props: {
    orientation: {
      type: String,
      default: "vertical",
    },
    page: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    vertical() {
      return this.orientation.toUpperCase() == "VERTICAL";
    },
    horizontal() {
      return this.orientation.toUpperCase() == "HORIZONTAL";
    },
  },
  mounted() {
    console.log(this.page);
  },
};
</script>

<style scoped>
.truncate-overflow {
  --max-lines: 3;
  --lh: 24px; /* html line height */
  max-height: calc(var(--lh) * var(--max-lines));
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 1rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--max-lines);
}
/*.truncate-overflow::before {
  content: "";
  position: absolute;
  bottom: 0;
  right: 1rem;
  width: 1rem;
  height: 1rem;
  background: #fff;
}
.truncate-overflow::after {
  content: "...";
  position: absolute;
  bottom: 0;
  right: 1rem;
}*/
</style>