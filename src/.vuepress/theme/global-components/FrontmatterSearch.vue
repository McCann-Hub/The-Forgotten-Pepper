<template>
  <div>
    <!-- 
        https://www.w3.org/TR/wai-aria-practices/#Listbox
        https://www.w3.org/TR/wai-aria-practices/examples/listbox/listbox-collapsible.html
      -->
    <div class="relative">
      <button
        @click="open = !open"
        class="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 text-left focus:outline-none"
      >
        <span class="flex items-center">
          <label
            v-if="selectedDisplay.length < 1"
            class="block text-sm font-medium text-gray-700"
          >
            {{ `${($themeConfig.frontmatterSearch || {}).label || "Search"}` }}
          </label>
          <span class="ml-3 block text-sm truncate">
            {{ selectedDisplay }}
          </span>
        </span>
        <span
          class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
        >
          <!-- Heroicon name: selector -->
          <svg
            class="h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </button>
      <!--
        Select popover, show/hide based on select state.

        Entering: ""
          From: ""
          To: ""
        Leaving: "transition ease-in duration-100"
          From: "opacity-100"
          To: "opacity-0"
      -->
      <transition name="fade">
        <div
          tabindex="-1"
          ref="selectOptions"
          v-show="open"
          @focusout="open = false"
          class="absolute mt-1 w-full rounded-md bg-white shadow-lg"
        >
          <ul
            class="rounded-md text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
          >
            <!--
            Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.

            Highlighted: "text-white bg-indigo-600", Not Highlighted: "text-gray-900"
          -->
            <li
              v-for="option in selectOptions"
              :key="option.key"
              class="rounded-md text-gray-900 select-none relative pl-3 pr-9 bg-gray-200 hover:bg-gray-400"
            >
              <div @click="onOptionClick(option.key)" class="flex items-center">
                <!-- Selected: "font-semibold", Not Selected: "font-normal" -->
                <span class="ml-3 block font-normal truncate">
                  {{ cleanKey(option.key) }}
                </span>
              </div>

              <!--
              Checkmark, only display for selected option.

              Highlighted: "text-white", Not Highlighted: "text-indigo-600"
            -->
              <span
                v-if="isSelected(option.key)"
                class="absolute inset-y-0 right-0 flex items-center pr-4"
              >
                <!-- Heroicon name: check -->
                <svg
                  class="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
function groupBy(xs, key) {
  return xs.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
}

function filterObject(obj, predicate) {
  return Object.keys(obj)
    .filter((k) => predicate(obj[k], k))
    .reduce((res, k) => ((res[k] = obj[k]), res), {});
}

function pluck(obj, mapper) {
  return Object.keys(obj).map((k) => mapper(obj[k], k));
}

export default {
  name: "FrontmatterSearch",
  data: () => ({
    open: false,
    selectedOption: "",
    selectedOptions: [],
  }),
  watch: {
    open(newVal) {
      if (newVal) {
        this.$nextTick(() => {
          this.$refs.selectOptions.focus();
        });
      }
    },
  },
  computed: {
    selectOptions() {
      return this[`$${(this.$themeConfig.frontmatterSearch || {}).id || "tag"}`]
        ._metaMap;
    },
    allowMultiple() {
      return (this.$themeConfig.frontmatterSearch || {}).multiple || false;
    },
    selected() {
      if (this.allowMultiple) {
        return this.selectedOptions;
      }
      return this.selectedOption;
    },
    selectedDisplay() {
      if (this.allowMultiple) {
        return this.selectedOptions
          .map((value) => this.cleanKey(value))
          .join(", ");
      }
      return this.cleanKey(this.selectedOption);
    },
    pages() {
      if (this.allowMultiple) {
        return this.selectedOptions
          .map((value) => (this.selectOptions[value] || {}).pages)
          .flat();
      }
      return (this.selectOptions[this.selectedOption] || {}).pages;
    },
    matches() {
      if (this.allowMultiple) {
        return pluck(
          filterObject(
            groupBy(this.pages, "key"),
            (g) => g.length == this.selectedOptions.length
          ),
          (g) => g[0]
        );
      }
      return this.pages;
    },
  },
  methods: {
    cleanKey(name) {
      return name.replace(/[^\w]/g, " ");
    },
    isSelected(checkOption) {
      return this.selected.includes(checkOption);
    },
    onOptionClick(clickedOption) {
      if (this.allowMultiple) {
        if (this.isSelected(clickedOption)) {
          const curIndex = this.selectedOptions.indexOf(clickedOption);
          this.selectedOptions.splice(curIndex, 1);
        } else {
          this.selectedOptions.push(clickedOption);
        }
      } else {
        if (this.isSelected(clickedOption)) {
          this.selectedOption = "";
        } else {
          this.selectedOption = clickedOption;
        }
        this.open = false;
      }
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>