const helpers = require('./helpers')
const DefinePlugin = require('webpack/lib/DefinePlugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')

const extractSass = new ExtractTextPlugin({
  filename: 'css/[name].[contenthash].css',
  disable: process.env.NODE_ENV === 'development'
})

let config = {
  entry: helpers.root('/src/index.js'),
  output: {
    path: helpers.root('/public'),
    filename: 'js/[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.js/,
        include: helpers.root('/src'),
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [{
            loader: 'css-loader',
            options: {
              minimize: false,
              sourceMap: false,
              importLoaders: 2
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false
            }
          }
          ],
          fallback: 'style-loader'
        })
      }
    ]
  },
  plugins: [
    extractSass,
    new DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(process.env.NODE_ENV),
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
}

module.exports = config
