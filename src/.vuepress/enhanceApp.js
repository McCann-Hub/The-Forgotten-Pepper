export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
  isServer, // is this enhancement applied in server-rendering or client
}) => {
  if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined') {
    const adsense = document.createElement('script');
    adsense.setAttribute('data-ad-client', 'ca-pub-3040760297930263');
    adsense.async = true;
    adsense.src =
      'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
    document.head.appendChild(adsense);
  }
};
