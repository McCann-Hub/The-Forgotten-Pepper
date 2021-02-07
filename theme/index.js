const removeMd = require('remove-markdown');
// const path = require('path');
const pick = require('lodash.pick');
const colors = require('tailwindcss/colors');

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
        id: 'article',
        dirname: 'articles',
        path: '/article/',
        itemPermalink: '/article/:year/:month/:day/:slug',
      },
      {
        id: 'post',
        dirname: 'posts',
        path: '/post/',
        itemPermalink: '/post/:year/:month/:day/:slug',
      },
      {
        id: 'blog',
        dirname: 'blog',
        path: '/blog/',
        itemPermalink: '/blog/:year/:month/:day/:slug',
      },
    ],
    frontmatters: [
      {
        id: 'tag',
        keys: ['tag', 'tags'],
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
   * configure seo plugin
   */
  const defaultSeoPluginOptions = {
    author: ($page, $site) => {
      const author = $page.frontmatter.author || $site.themeConfig.author;
      return {
        name: author.name || author,
        twitter: author.twitter
      }
    },
    publishedAt: ($page) =>
      ($page.frontmatter.date || $page.created) &&
      new Date($page.frontmatter.date || $page.created).toISOString(),
    customMeta: (add, context) => {
      const {
        $site, // Site configs provided by Vuepress
        $page, // Page configs provided by Vuepress
        // All the computed options from above:
        siteTitle,
        title,
        description,
        author,
        tags,
        twitterCard,
        type,
        url,
        image,
        publishedAt,
        modifiedAt,
      } = context;
      add('article:author', author.name);
    },
  }
  const themeConfigSeoPluginOptions = {
    ...pick(themeConfig, ['seo']),
  };
  const seoPluginOptions = Object.assign(
    {},
    defaultSeoPluginOptions,
    themeConfigSeoPluginOptions.seo || {}
  );
  /*
   * configure tailwindcss plugin
   */
  const defaultTailwindPluginOptions = {
    /*theme: {
      extend: {
        colors: {
          primary: colors.coolGray,
          accent: colors.coolGray,
          secondary: colors.coolGray,
          text: colors.coolGray,
        },
      },
    },*/
  };
  const themeConfigTailwindPluginOptions = {
    ...pick(themeConfig, ['tailwind']),
  };
  const tailwindPluginOptions = Object.assign(
    {},
    defaultTailwindPluginOptions,
    themeConfigTailwindPluginOptions.tailwind || {}
  );
  /*
   * Integrate plugins
   */
  const plugins = [
    ['@vuepress/blog', blogPluginOptions],
    require('../plugin-created'),
    ['seo', seoPluginOptions], // set SEO last so all the page data is extended
    [require('../plugin-tailwindcss'), tailwindPluginOptions],
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
