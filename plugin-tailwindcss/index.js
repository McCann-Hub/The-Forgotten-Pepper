module.exports = (options = {}, ctx) => {
  const { cwd, siteConfig, sourceDir, vuepressDir } = ctx;

  const getTailwindConfig = () => {
    try {
      return require(`${cwd}/tailwind.config.js`);
    } catch (e) {
      return Object.assign(
        {
          purge: {
            content: [sourceDir, vuepressDir].map(
              (dir) => `${dir}/**/*.@(js|ts|md|vue|html)`
            ),
          },
          darkMode: 'class', // or 'media' or 'class'
          variants: {
            extend: {
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
