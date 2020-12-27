<template>
  <div>
    <div
      :class="`bg-white rounded-lg overflow-hidden shadow-lg flex ${
        vertical ? 'flex-col max-w-sm' : ''
      }`"
    >
      <img
        :class="`${vertical ? 'w-full' : 'w-1/5'}`"
        src="https://web2tailwind.com/assets/docs/master/image-01.jpg"
        alt="Sunset in the mountains"
      />
      <div class="flex flex-col">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 py-4">
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
  },
  computed: {
    vertical() {
      return this.orientation.toUpperCase() == "VERTICAL";
    },
    horizontal() {
      return this.orientation.toUpperCase() == "HORIZONTAL";
    },
  },
};
</script>