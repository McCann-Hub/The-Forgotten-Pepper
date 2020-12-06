module.exports = {
  dest: "./dist",
  title: "The Forgotten Pepper",
  description: "A Vuepress powered blog",
  postcss: {
    plugins: [
      require("tailwindcss")("./tailwind.config.js"),
      require("autoprefixer"),
    ],
  },
};
