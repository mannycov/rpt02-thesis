const webpack = require('webpack');
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

let config = {
  entry: './client/src/index.js',
  output: {
    path: path.resolve(__dirname, './client/dist'),
    filename: 'output.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // files ending with .js
        exclude: /node_modules/, // exclude the node_modules directory
        loader: "babel-loader" // use this (babel-core) loader
      },
      {
        test: /\.scss$/,
        use: ExtractTextWebpackPlugin.extract({
         use: ['css-loader', 'sass-loader'],
         fallback: 'style-loader'
        })
      }
    ]
  },
  plugins: [
    new ExtractTextWebpackPlugin('styles.css')
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './client/dist'),
    historyApiFallback: true,
    inline: true,
    open: true
  },
  devtool: 'eval-source-map'
}

module.exports = config;
