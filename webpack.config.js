require('dotenv').config();
var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        },
      },
      {
        test: /(\.css)$/,
        loaders: ['style-loader', 'css-loader'],
        include: /flexboxgrid/
      }

    ],
  },
  resolve: {
    modules: [
      path.resolve('./client'),
      'node_modules',
    ],
  },
  // watch: true
};
