const path = require('path')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

const config = {
  entry: './client/src/index.jsx',
  output: {
    path: path.resolve(__dirname, './client/dist'),
    filename: 'output.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/, // files ending with .js
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

module.exports = config
