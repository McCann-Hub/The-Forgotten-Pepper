const path = require('path');

module.exports = {
  dest: './dist',
  title: 'The Forgotten Pepper',
  description: 'A Vuepress powered blog',
  themeConfig: {
    domain: 'https://theforgottenpepper.com',
    author: 'Melanie Houghton',
    logo: 'forgotten-pepper',
    dark: true,
    nav: [
      {
        text: 'Hello',
        items: [
          {
            text: 'World',
          },
          {
            text: 'Foo',
          },
          {
            text: 'Bar',
          },
        ],
      },
      {
        text: 'About',
      },
    ],
    social: [
      {
        icon: 'facebook-square-color',
        link: 'https://www.facebook.com/4gottenpepper',
        text: 'Facebook',
      },
      {
        component: 'SocialIcon',
        icon: 'instagram-square-color',
        link: 'https://www.instagram.com/4gottenpepper/',
        text: 'Instagram',
      },
      {
        icon: 'pinterest-round-color',
        link: '#',
        text: 'Pintrest',
      },
    ],
    directories: [
      {
        // Unique ID of current classification
        id: 'post',
        // Target directory
        dirname: 'posts',
        // Path of the `entry page` (or `list page`)
        path: '/post/',
        itemPermalink: '/post/:year/:month/:day/:slug',
      },
    ],
    frontmatters: [
      {
        /* Unique ID of current classification */
        id: 'ingredient',
        /* Decide that the frontmatter keys will be grouped under this classification */
        keys: ['ingredient', 'ingredients'],
        /* Path of the `entry page` (or `list page`) */
        path: '/ingredient/',
        /* Layout of the `entry page` */
        //layout: 'Ingredients',
        /* Layout of the `scope page` */
        scopeLayout: 'Ingredient',
        select: {
          label: 'Recipes with...',
          multiple: true,
        }
      },
      {
        /* Unique ID of current classification */
        id: 'menu',
        /* Dcide that the frontmatter keys will be grouped under this classification */
        keys: ['menu'],
        /* Path of the `entry page` (or `list page`) */
        path: '/menu/',
        /* Layout of the `entry page` */
        //layout: 'MenuSections',
        /* Layout of the `scope page` */
        //scopeLayout: 'Menu'
      },
    ],
    sitemap: {
      hostname: 'https://theforgottenpepper.com',
    },
    seo: {
      author: ($page, $site) =>
        $page.frontmatter.author || $site.themeConfig.author,
      publishedAt: ($page) =>
        ($page.frontmatter.date || $page.created) &&
        new Date($page.frontmatter.date || $page.created).toISOString(),
      tags: ($page) =>
        $page.frontmatter.ingredients || [$page.frontmatter.ingredient],
      type: ($page) =>
        ['articles', 'posts', 'blog'].some((folder) =>
          $page.path.startsWith('/' + folder)
        )
          ? 'article'
          : 'website',
      url: ($page, $site) => ($site.themeConfig.domain || '') + $page.path,
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
        add('article:author', author);
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, 'assets'),
        '@icons': path.resolve(__dirname, 'assets', 'icons'),
      },
    },
  },
  postcss: {
    plugins: [
      require('tailwindcss')('./tailwind.config.js'),
      require('autoprefixer'),
    ],
  },
};
