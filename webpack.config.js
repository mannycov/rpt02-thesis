const webpack = require('webpack');
const path = require('path');
const extractTextWebpackPlugin = require('extract-text-webpack-plugin');

let config = {
  entry: './client/src/index.js',
  output: {
    path: path.resolve(__dirname, './client/dist'),
    filename: 'output.js'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/, // files ending with .js
      exclude: /node_modules/, // exclude the node_modules directory
      loader: "babel-loader" // use this (babel-core) loader
    },
    {
      test: /\.scss$/,
      use: extractTextWebpackPlugi.extract({
        use: ['style-loader', 'css-loader', 'sass-loader'],
        fallback: 'style-loader'
      })
    }
  ]},
  plugins: [
    new extractTextWebpackPlugin('styles.css')
  ]
};

module.exports = config;
