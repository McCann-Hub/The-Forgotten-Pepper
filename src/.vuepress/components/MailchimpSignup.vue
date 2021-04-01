<template>
  <div id="mc_embed_signup" ref="mc_embed_signup" class="mt-3 flex justify-center">
    <form
      action="https://theforgottenpepper.us1.list-manage.com/subscribe/post?u=561ad117df42c59cc7a0eb213&amp;id=77a07bddcb"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      class="validate"
      target="_blank"
      novalidate
    >
      <div id="mc_embed_signup_scroll">
        <h2>Subscribe</h2>
        <div class="indicates-required">
          <span class="asterisk">*</span> indicates required
        </div>
        <div class="mc-field-group">
          <label for="mce-EMAIL"
            >So glad to have you join! Please place Email here
            <span class="asterisk">*</span>
          </label>
          <input
            type="email"
            value=""
            name="EMAIL"
            class="required email"
            id="mce-EMAIL"
          />
        </div>
        <div class="mc-field-group">
          <label for="mce-FNAME"
            >What's your First Name, Love? <span class="asterisk">*</span>
          </label>
          <input
            type="text"
            value=""
            name="FNAME"
            class="required"
            id="mce-FNAME"
          />
        </div>
        <div class="mc-field-group">
          <label for="mce-LNAME">And your Last Name? </label>
          <input type="text" value="" name="LNAME" class="" id="mce-LNAME" />
        </div>
        <div class="mc-field-group input-group">
          <strong>Email Format </strong>
          <ul>
            <li>
              <input
                type="radio"
                value="html"
                name="EMAILTYPE"
                id="mce-EMAILTYPE-0"
              /><label for="mce-EMAILTYPE-0">html</label>
            </li>
            <li>
              <input
                type="radio"
                value="text"
                name="EMAILTYPE"
                id="mce-EMAILTYPE-1"
              /><label for="mce-EMAILTYPE-1">text</label>
            </li>
          </ul>
        </div>
        <div id="mce-responses" class="clear">
          <div
            class="response"
            id="mce-error-response"
            style="display: none"
          ></div>
          <div
            class="response"
            id="mce-success-response"
            style="display: none"
          ></div>
        </div>
        <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
        <div style="position: absolute; left: -5000px" aria-hidden="true">
          <input
            type="text"
            name="b_561ad117df42c59cc7a0eb213_77a07bddcb"
            tabindex="-1"
            value=""
          />
        </div>
        <div class="clear">
          <input
            type="submit"
            value="Subscribe"
            name="subscribe"
            id="mc-embedded-subscribe"
            class="button"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "MailchimpSignup",
  mounted() {
    const aws = document.createElement("script");
    aws.src = "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js";
    this.$refs.mc_embed_signup.appendChild(aws);

    const fn = document.createElement("script");
    fn.innerText = `(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[4]='PHONE';ftypes[4]='phone';}(jQuery));var $mcj = jQuery.noConflict(true);`;
    this.$refs.mc_embed_signup.appendChild(fn);
  },
};
</script>

<style lang="stylus" scoped>
.mc-field-group {
    @apply: my-3;

    input {
        @apply: rounded border-accent-500 border-2 shadow-inner;
    }

    input[type="radio"] {
        @apply: ml-24 mr-3;
    }
}

input.button {
    @apply: px-3 py-2 rounded border-2;
    
    &:hover {
        @apply: shadow;
    }

    &:focus {
        @apply: shadow-inner;
    }
}

input {
    @apply: outline-none;
}
</style>