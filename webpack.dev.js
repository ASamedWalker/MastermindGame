const path = require('path');
const config = require('./webpack.config.js');
const { merge } = require('webpack-merge');

module.exports = merge(config, {
  mode: 'development',
  devtool: "eval-cheap-module-source-map",
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
});