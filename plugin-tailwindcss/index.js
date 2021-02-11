const path = require('path');

module.exports = (options = {}, ctx) => {
  const { cwd, siteConfig, sourceDir } = ctx;
  const root = path.resolve(sourceDir, '..');

  const getTailwindConfig = () => {
    try {
      return require(`${cwd}/tailwind.config.js`);
    } catch (e) {
      return Object.assign(
        {
          purge: {
            content: [`${root}/!(dist|node_modules)/**/*.@(js|ts|md|vue|html)`],
            options: {
              keyframes: true,
              fontFace: true,
            },
          },
          darkMode: 'class', // or 'media' or 'class'
          variants: {
            extend: {
              backgroundColor: ['active'],
              backgroundOpacity: ['dark'],
              textOpacity: ['dark'],
            },
          },
        },
        options
      );
    }
  };

  const plugins = [
    require('tailwindcss')(getTailwindConfig()),
    require('autoprefixer'),
  ];
  siteConfig.postcss = Object.assign(siteConfig.postcss || {}, { plugins });

  return {
    name: 'tailwindcss',
  };
};
