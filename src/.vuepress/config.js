const path = require('path');

console.log(path.resolve(__dirname, 'assets', 'icon'));

module.exports = {
  dest: "./dist",
  title: "The Forgotten Pepper",
  description: "A Vuepress powered blog",
  themeConfig: {
    logo: 'forgotten-pepper',
    nav: [
      {
        text: "About"
      },
      {
        text: "Recepies"
      }
    ],
    social: [
      {
        icon: 'facebook-square-color',
        link: 'https://www.facebook.com/4gottenpepper',
        text: 'Facebook'
      },
      {
        component: 'SocialIcon',
        icon: 'instagram-square-color',
        link: 'https://www.instagram.com/4gottenpepper/',
        text: 'Instagram'
      },
      {
        icon: 'pinterest-round-color',
        link: '#',
        text: 'Pintrest'
      },
    ]
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, 'assets'),
        '@icons': path.resolve(__dirname, 'assets', 'icons')
      }
    }
  },
  postcss: {
    plugins: [
      require("tailwindcss")("./tailwind.config.js"),
      require("autoprefixer"),
    ],
  },
};
