module.exports = (themeConfig, ctx) => {
   return {
      plugins: {
         seo: (themeConfig.plugins || {}).seo,
         '@vuepress/blog': (themeConfig.plugins || {}).blog
      }
   };
};
