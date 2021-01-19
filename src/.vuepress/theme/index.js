const path = require('path');

module.exports = {
  extend: require.resolve('../../../theme'),
  alias: {
    '@fonts': path.resolve(__dirname, 'assets', 'fonts'),
  },
};
