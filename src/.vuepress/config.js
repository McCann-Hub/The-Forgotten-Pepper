const path = require('path');

console.log(path.resolve(__dirname, 'assets', 'icon'));

module.exports = {
  dest: "./dist",
  title: "The Forgotten Pepper",
  description: "A Vuepress powered blog",
  themeConfig: {
    social: [
      {
        icon: 'facebook-square-color',
        link: '',
        text: 'Facebook'
      },
      {
        icon: '',
        link: '',
        text: 'Instagram'
      },
      {
        icon: '',
        link: '',
        text: 'Pintrest'
      },
    ]
  },
  configureWebpack: {
    resolve: {
      alias: {
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
