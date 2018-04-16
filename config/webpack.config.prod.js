const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin')
const CompressionPlugin = require('compression-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { GenerateSW } = require('workbox-webpack-plugin')
const helpers = require('./helpers')
const webpackConfig = require('./webpack.config.base')

webpackConfig.plugins = [...webpackConfig.plugins,
  new HtmlWebpackPlugin({
    inject: true,
    template: helpers.root('/src/index.html'),
    favicon: helpers.root('/src/favicon.ico'),
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      removeEmptyAttributes: true,
      removeStyleLinkTypeAttributes: true,
      keepClosingSlash: true,
      minifyJS: true,
      minifyCSS: true,
      minifyURLs: true
    }
  }),
  new UglifyJsPlugin({
    include: /\.js$/,
    compress: true
  }),
  new CompressionPlugin({
    asset: '[path].gz[query]',
    test: /\.js$/
  }),
  new GenerateSW({
    swDest: 'sw.js',
    runtimeCaching: [
      {
        urlPattern: /\.(?:png|gif|jpg|svg)$/,
        handler: 'cacheFirst',
        options: {
          cacheName: 'images-cache'
        }
      },
      {
        urlPattern: /\.(?:js|css|html)$/,
        handler: 'staleWhileRevalidate',
        options: {
          cacheName: 'static-content'
        }
      }
    ]
  })
]

module.exports = webpackConfig
