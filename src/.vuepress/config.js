const path = require('path');
const colors = require('tailwindcss/colors');

module.exports = {
  dest: './dist',
  title: 'The Forgotten Pepper',
  description:
    'Recipes geared towards feeding your family while using ingredients you might have forgotten to use right away, or new ingredients you’ve been figuring out how to prepare.',
  head: [
    [
      'script',
      {
        'data-ad-client': 'ca-pub-3040760297930263',
        async: true,
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
      },
    ],
  ],
  themeConfig: {
    domain: 'https://theforgottenpepper.com',
    author: 'Mrs. Mhm',
    image: '/logo.webp',
    logo: 'forgotten-pepper',
    privacyPolicy: '/privacy',
    cookiePolicy: '/privacy#cookies-and-web-beacons-bacons',
    dark: true,
    nav: [
      {
        text: 'About',
        items: [
          {
            text: 'Our team',
            link: '/about-us',
          },
          {
            text: 'Subscribe',
            link: '/subscribe',
          },
          /*{
            text: 'Work With Us',
          },*/
          {
            text: 'T & C',
            link: '/toc',
          },
          {
            text: 'Privacy',
            link: '/privacy',
          },
        ],
      },
    ],
    social: [
      {
        text: 'Subscribe',
        link: '/subscribe',
      },
      {
        icon: 'FacebookIcon',
        link: 'https://www.facebook.com/4gottenpepper',
        text: 'Facebook',
      },
      {
        icon: 'Instagram',
        link: 'https://www.instagram.com/4gottenpepper',
        text: 'Instagram',
      },
      {
        icon: 'pinterest',
        link: 'https://www.pinterest.com/4gottenpepper',
        text: 'Pintrest',
      },
    ],
    blog: {
      directories: [
        {
          id: 'post',
          dirname: 'posts',
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
          },
        },
        {
          /* Unique ID of current classification */
          id: 'recipe',
          /* Dcide that the frontmatter keys will be grouped under this classification */
          keys: ['menu'],
          /* Path of the `entry page` (or `list page`) */
          path: '/recipe/',
          /* Layout of the `entry page` */
          //layout: 'Recipes',
          /* Layout of the `scope page` */
          //scopeLayout: 'Recipe'
        },
      ],
      sitemap: {
        hostname: 'https://theforgottenpepper.com',
      },
      feed: {
        canonical_base: 'https://theforgottenpepper.com',
      },
    },
    seo: {
      tags: ($page) =>
        $page.frontmatter.ingredients || [$page.frontmatter.ingredient],
    },
    tailwind: {
      theme: {
        extend: {
          colors: {
            // https://javisperez.github.io/tailwindcolorshades/
            primary: {
              // sushi
              '50': '#f9fbf5',
              '100': '#f4f6ec',
              '200': '#e3eacf',
              '300': '#d3ddb2',
              '400': '#b1c378',
              '500': '#90A93E',
              '600': '#829838',
              '700': '#6c7f2f',
              '800': '#566525',
              '900': '#47531e',
            },
            accent: {
              // jelly-bean
              '50': '#f2f9fa',
              '100': '#e6f2f6',
              '200': '#bfdfe7',
              '300': '#99cbd9',
              '400': '#4da4bd',
              '500': '#007da0',
              '600': '#007190',
              '700': '#005e78',
              '800': '#004b60',
              '900': '#003d4e',
            },
            secondary: {
              // yellow-green
              '50': '#fdfef9',
              '100': '#fcfdf3',
              '200': '#f7f9e1',
              '300': '#f1f5ce',
              '400': '#e7eeaa',
              '500': '#DDE785',
              '600': '#c7d078',
              '700': '#a6ad64',
              '800': '#858b50',
              '900': '#6c7141',
            },
            text: colors.coolGray,
          },
        },
      },
    },
    gtag:{
      ga: 'G-KWJZ6BY65J',
    },
    remarkbox: {
      ownerKey: 'fa12be11-9a74-11eb-9926-040140774501',
    },
    pwa: true,
    favicons: {
      background: '#007da0',
      themeColor: '#90A93E',
    },
    bugUrl: 'https://github.com/McCann-Hub/The-Forgotten-Pepper/issues',
    //imagemin: false,
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, 'assets'),
      },
    },
  },
};
