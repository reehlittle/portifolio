/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@app/routes': path.resolve(__dirname, 'src/app/routes'),
      '@app/pages': path.resolve(__dirname, 'src/app/pages'),
      '@assets/styles': path.resolve(__dirname, 'src/assets/styles'),
    },
  },
};
