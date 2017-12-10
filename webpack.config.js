const webpack = require('webpack');

let config = {
  entry: './client/index.js',
  output: {
    filename: './dist/output.js'
  },
  module: {
    rules: [{
      test: /\.js$/, // files ending with .js
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
