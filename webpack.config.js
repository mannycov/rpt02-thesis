const webpack = require('webpack');
const path = require('path');

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
      loader: ['style-loader', 'css-loader', 'sass-loader']
    }
  ]}
}

module.exports = config;
