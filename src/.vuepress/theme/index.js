module.exports = (themeConfig, ctx) => {
   return {
      plugins: [
         ['seo', (themeConfig.plugins || {}).seo]
      ],
   };
};
