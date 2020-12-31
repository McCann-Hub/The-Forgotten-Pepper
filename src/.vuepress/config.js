const path = require('path');

module.exports = {
  dest: './dist',
  title: 'The Forgotten Pepper',
  description: 'A Vuepress powered blog',
  themeConfig: {
    domain: 'https://theforgottenpepper.com',
    author: '',
    logo: 'forgotten-pepper',
    dark: true,
    frontmatterSearch: {
      id: 'ingredient',
      label: 'Recipes with...',
      multiple: true,
    },
    nav: [
      {
        text: 'Recipes',
        items: [
          {
            text: 'Breakfast',
          },
          {
            text: 'Lunch',
          },
          {
            text: 'Dinner',
          },
          {
            text: 'Dessert',
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
    plugins: {
      blog: {
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
            // Unique ID of current classification
            id: 'ingredient',
            // Decide that the frontmatter keys will be grouped under this classification
            keys: ['ingredient', 'ingredients'],
            // Path of the `entry page` (or `list page`)
            path: '/ingredient/',
            // Layout of the `entry page`
            layout: 'Ingredients',
            // Layout of the `scope page`
            scopeLayout: 'Ingredient',
          },
        ],
        globalPagination: {
          lengthPerPage: 3,
        },
        sitemap: {
          hostname: 'https://theforgottenpepper.com',
        },
      },
      seo: {
        tags: ($page) =>
          $page.frontmatter.ingredients || [$page.frontmatter.ingredient],
        type: ($page) =>
          ['articles', 'posts', 'blog'].some((folder) =>
            $page.path.startsWith('/' + folder)
          )
            ? 'article'
            : 'website',
        url: ($page, $site) => ($site.themeConfig.domain || '') + $page.path,
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
