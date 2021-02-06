import { inject, eject } from './jsSdkUtil.js';

export default {
  mounted() {
    inject(
      document,
      'script',
      'facebook-jssdk',
      'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0'
    );
  },
  beforeDestroy() {
    eject(document, 'script', 'facebook');
    Object.keys(window).forEach((k) => {
      if (k.startsWith('FB')) {
        delete window[k];
      }
    });
  },
};
