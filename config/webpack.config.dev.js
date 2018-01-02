const HtmlWebpackPlugin = require('html-webpack-plugin')
const helpers = require('./helpers')
const webpackConfig = require('./webpack.config.base')

webpackConfig.plugins.push(new HtmlWebpackPlugin({
  inject: true,
  template: helpers.root('/src/index.html'),
  favicon: helpers.root('/src/favicon.ico')
}))

webpackConfig.devtool = 'inline-source-map'

webpackConfig.devServer = {
  historyApiFallback: true,
  contentBase: './src',
  noInfo: true,
  open: true
}

module.exports = webpackConfig
