const removeMd = require('remove-markdown');
// const path = require('path');
const pick = require('lodash.pick');

module.exports = (themeConfig) => {
  /*
   * Default theme configuration
   */
  themeConfig = Object.assign(themeConfig, {
    nav: themeConfig.nav || [
      {
        text: 'Blog',
        link: '/',
      },
      {
        text: 'Tags',
        link: '/tag/',
      },
    ],
    summary: themeConfig.summary === undefined ? true : themeConfig.summary,
    summaryLength:
      typeof themeConfig.summaryLength === 'number'
        ? themeConfig.summaryLength
        : 200,
    pwa: !!themeConfig.pwa,
  });
  /*
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
      lengthPerPage: 3,
      sorter: (a, b) => {
        const dayjs = require('dayjs');
        const aPublished = dayjs(a.frontmatter.date || a.created);
        const bPublished = dayjs(b.frontmatter.date || b.created);
        if (bPublished - aPublished === 0) {
          return dayjs(b.lastUpdated) - dayjs(a.lastUpdated);
        }
        return bPublished - aPublished;
      },
    },
  };
  const blogPluginProperties = [
    'directories',
    'frontmatters',
    'globalPagination',
    'sitemap',
    'comment',
    'newsletter',
  ];
  const themeConfigBlogPluginOptions = {
    ...pick(themeConfig, blogPluginProperties),
  };
  const blogPluginOptions = Object.assign(
    {},
    defaultBlogPluginOptions,
    themeConfigBlogPluginOptions
  );
  /*
   * Integrate plugins
   */
  const plugins = [
    ['@vuepress/blog', blogPluginOptions],
    require('../plugin-created'),
    ['seo', (themeConfig || {}).seo], // set SEO last so all the page data is extended
  ];
  /*
   *
   */
  return {
    plugins,
    /*
     * Generate summary.
     */
    extendPageData(pageCtx) {
      const strippedContent = pageCtx._strippedContent;
      if (!strippedContent) {
        return;
      }
      if (themeConfig.summary) {
        pageCtx.summary =
          removeMd(
            strippedContent
              .trim()
              .replace(/^#+\s+(.*)/, '')
              .slice(0, themeConfig.summaryLength)
          ) + ' ...';
        pageCtx.frontmatter.description = pageCtx.summary;
      }
      if (pageCtx.frontmatter.summary) {
        pageCtx.frontmatter.description = pageCtx.frontmatter.summary;
      }
    },
  };
};
