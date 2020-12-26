module.exports = (themeConfig) => {
  /**
   * Configure blog plugin
   */
  const defaultBlogPluginOptions = {
    directories: [
      {
        id: 'post',
        dirname: '_posts',
        path: '/',
      },
    ],
    frontmatters: [
      {
        id: 'tag',
        keys: ['tags'],
        path: '/tag/',
      },
    ],
    globalPagination: {
      lengthPerPage: 5,
    },
  };

  const themeConfigBlogPluginOptions = (themeConfig.plugins || {}).blog;

  const blogPluginOptions = Object.assign(
    {},
    defaultBlogPluginOptions,
    themeConfigBlogPluginOptions
  );

  const plugins = [
    ['seo', (themeConfig.plugins || {}).seo],
    ['@vuepress/blog', blogPluginOptions],
  ];

  const config = {
    plugins,
  };

  return config;
};
