module.exports = {
  dest: "./dist",
  title: "The Forgotten Pepper",
  description: "A Vuepress powered blog",
  themeConfig: {
    social: [
      {
        icon: '',
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
  postcss: {
    plugins: [
      require("tailwindcss")("./tailwind.config.js"),
      require("autoprefixer"),
    ],
  },
};
