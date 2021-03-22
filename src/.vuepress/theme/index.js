const path = require('path');

module.exports = {
  extend: '@mccann-hub/blog',
  alias: {
    '@fonts': path.resolve(__dirname, 'assets', 'fonts'),
  },
};
