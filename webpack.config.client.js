const webpack = require('webpack')
const path = require('path')

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3001/',
    'webpack/hot/only-dev-server',
    './client/index.jsx'
  ],
  target: 'web',
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: 'babel-loader',
      include: [
        path.join(__dirname, 'client'),
        path.join(__dirname, 'client/src')
      ]
    }]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        BUILD_TARGET: JSON.stringify('client')
      }
    })
  ],
  devServer: {
    host: 'localhost',
    port: 3001,
    historyApiFallback: true,
    hot: true,
    headers: { 'Access-Control-Allow-Origin': '*' }
  },
  output: {
    path: path.join(__dirname, '/client/.dist'),
    publicPath: 'http://localhost:3001/',
    filename: 'client.js'
  }
}
