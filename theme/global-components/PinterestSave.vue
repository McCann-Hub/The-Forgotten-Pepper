<template>
  <a
    href="https://www.pinterest.com/pin/create/button/"
    :data-pin-save="save"
    :data-pin-do="`button${type}`"
    :data-pin-id="id"
    :data-pin-nopin="noPin"
    :data-pin-round="round"
    :data-pin-tall="tall"
    :data-pin-count="count"
    :data-pin-description="_description"
    :data-pin-media="media"
    :data-pin-url="url"
    :data-pin-no-hover="noHover"
  >
  </a>
</template>

<script>
import { inject, eject } from "../mixins/jsSdkUtil.js";

export default {
  name: "PinterestSave",
  props: {
    save: {
      /*
       * If set to false, show an old-style "Pin It" button.
       */
      type: String, // false or [not set]
    },
    type: {
      /*
       * Determines whether the Pinner can save any image from the page
       * (all images will appear in the Image Picker form)
       * or is restricted to saving a particular image
       * (and is taken straight to the Pin Create form).
       */
      type: String, // Bookmark or Pin
      default: "Bookmark",
    },
    id: {
      /*
       * If you’ve already saved this image,
       * use this attribute to treat any new Pins of this image as repins of the original.
       * Doing this can give you a better feel for engagement,
       * because any Pins you create will count towards repins of your original Pin.
       */
      type: String,
    },
    noPin: {
      /*
       * The image can't be saved,
       * and hover buttons won't appear on the image.
       * This attribute is applied to individual images on your page.
       */
      type: String, // [any value] or [blank]
    },
    hover: {
      /*
       * Shows the Save button only when a user hovers over images.
       * This applies to all images on the page.
       */
      type: String, // [any value] or [not set]
    },
    sticky: {
      /*
       * Sticky buttons are on by default when data-pin-hover="true".
       * This setting turns them off.
       */
      type: String, // false or [not set]
    },
    round: {
      /*
       * Changes the Save button to the round and red style.
       * This overrides the data-pin-color and data-pin-count attributes
       * (round buttons won’t show Pin counts).
       */
      type: String, // true or [not set]
    },
    tall: {
      /*
       * Changes the height of the Save button.
       * Rectangular buttons are twice as wide as they are tall.
       * true: 28px for rectangular, 32px for round
       * [not set]: 20px for rectangular, 16px for round
       */
      type: String, // true or [not set]
    },
    count: {
      /*
       * Shows the Pin count for one-image (data-pin-do="buttonPin") Save buttons.
       * Note: Pin counts won't appear for round, hover or custom buttons.
       */
      type: String, // above, beside, or [not set]
    },
    description: {
      /*
       * Overrides the default image description and substitutes an image description you provide.
       * You can include up to 500 characters, but only 75-100 will appear in grid view.
       */
      type: String,
    },
    media: {
      /*
       * Overrides the image and substitutes a different image in the Pin Create form.
       */
      type: String,
    },
    url: {
      /*
       * Overrides the image's page URL and substitutes the URL of your choice.
       */
      type: String,
    },
    noHover: {
      /*
       * Hover buttons won't appear over this image,
       * but the image can still be saved unless the data-pin-nopin attribute is set.
       */
      type: String, // [any value] or [not set]
    },
  },
  computed: {
    _description() {
      return (
        this.description ||
        this.$page.summary ||
        this.$frontmatter.summary ||
        this.$frontmatter.description ||
        this.$page.title ||
        this.$title
      ).trim();
    },
  },
  mounted() {
    const self = this;
    inject(
      document,
      "script",
      "pinterest-jssdk",
      "https://assets.pinterest.com/js/pinit.js",
      (js) => {
        if (self.hover) {
          js.setAttribute("data-pin-hover", self.hover);
        }
        if (self.sticky) {
          js.setAttribute("data-pin-sticky", self.sticky);
        }
      }
    );
  },
  beforeDestroy() {
    eject(document, "script", "pinterest");
    Object.keys(window).forEach((k) => {
      if (k.startsWith("PIN_")) {
        delete window[k];
      }
    })
  },
};
</script>