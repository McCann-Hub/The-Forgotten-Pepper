<template>
  <div class="header-dropdown">
    <!-- 
        https://www.w3.org/TR/wai-aria-practices/#Listbox
        https://www.w3.org/TR/wai-aria-practices/examples/listbox/listbox-collapsible.html
      -->
    <div class="relative">
      <button
        @click="open = !open"
        class="relative w-full border-2 rounded-xl border-black bg-white pl-3 pr-10 text-left focus:outline-none"
      >
        <span class="flex items-center">
          <span
            v-if="selectedDisplay.length < 1"
            class="block text-sm font-medium capitalize text-black truncate"
          >
            {{ selectLabel }}
          </span>
          <span class="ml-3 block text-sm capitalize text-black truncate">
            {{ selectedDisplay }}
          </span>
        </span>
        <span class="ml-3 absolute inset-y-0 right-0 pr-2 pointer-events-none">
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
      <transition name="fade">
        <div
          tabindex="-1"
          ref="selectOptions"
          v-show="open"
          @focusout="open = false"
          class="absolute w-full rounded focus:outline-none z-10 header-dropdown"
        >
          <ul class="shadow-sm rounded text-sm overflow-auto focus:outline-none">
            <li
              v-for="option in selectOptions"
              :key="option.key"
              class="rounded select-none relative pl-3 pr-9 py-1"
            >
              <div @click="onOptionClick(option.key)" class="flex items-center">
                <!-- Selected: "font-semibold", Not Selected: "font-normal" -->
                <span
                  :class="`ml-3 block capitalize truncate ${
                    isSelected(option.key) ? 'font-semibold' : 'font-normal'
                  }`"
                >
                  {{ cleanKey(option.key) }}
                </span>
              </div>
              <span
                v-if="isSelected(option.key)"
                class="absolute inset-y-1 right-0 pr-4"
              >
                <!-- Heroicon name: check -->
                <svg
                  class="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
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
    <transition name="fade">
      <component
        v-if="overlay"
        :is="overlayout"
        :pages="matches"
        @close="overlay = false"
      />
    </transition>
  </div>
</template>

<script>
import FrontmatterSelect from "../mixins/frontmatterSelect.js";

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
  name: "FrontmatterMultiSelect",
  mixins: [FrontmatterSelect],
  data: () => ({
    open: false,
    selectedOptions: [],
    overlay: false,
  }),
  watch: {
    open(newVal) {
      if (newVal) {
        this.$nextTick(() => {
          this.$refs.selectOptions.focus();
        });
      } else {
        if (this.matches.length > 0) {
          this.overlay = true;
        } else {
          this.overlay = false;
        }
      }
    },
    overlay(newVal) {
      if (!newVal) {
        this.selectedOptions.splice(0, this.selectedOptions.length);
      }
    },
  },
  computed: {
    selectedDisplay() {
      return this.selectedOptions
        .map((value) => this.cleanKey(value))
        .join(", ");
    },
    pages() {
      return this.selectOptions
        .filter((f) => this.selectedOptions.includes(f.key))
        .map((m) => m.pages)
        .flat();
    },
    matches() {
      return pluck(
        filterObject(
          groupBy(this.pages, "key"),
          (g) => g.length == this.selectedOptions.length
        ),
        (g) => g[0]
      );
    },
    overlayout() {
      return `${this.frontmatter.scopeLayout || "Tag"}Overlayout`;
    },
  },
  methods: {
    cleanKey(name) {
      return name.replace(/[^\w]/g, " ");
    },
    isSelected(checkOption) {
      return this.selectedOptions.includes(checkOption);
    },
    onOptionClick(clickedOption) {
      if (this.isSelected(clickedOption)) {
        const curIndex = this.selectedOptions.indexOf(clickedOption);
        this.selectedOptions.splice(curIndex, 1);
      } else {
        this.selectedOptions.push(clickedOption);
      }
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: var(--transition-duration);
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>