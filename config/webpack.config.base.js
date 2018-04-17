const helpers = require('./helpers')
const DefinePlugin = require('webpack/lib/DefinePlugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const autoprefixer = require('autoprefixer')

const isProduction = process.env.NODE_ENV === 'production'

const createCssConfig = (config) => isProduction ? [MiniCssExtractPlugin.loader, ...config.slice(1)] : ['css-hot-loader', ...config]

let webpackConfig = {
  mode: isProduction ? 'production' : 'development',
  entry: helpers.root('/src/index-router.js'),
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
        use: createCssConfig([
          {
            loader: 'style-loader',
            options: {
              sourceMap: !isProduction
            }
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              url: false,
              minimize: false,
              sourceMap: !isProduction,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer],
              sourceMap: !isProduction
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: !isProduction
            }
          }
        ])
      },
      {
        test: /\.css$/,
        use: createCssConfig([
          {
            loader: 'style-loader',
            options: {
              sourceMap: !isProduction
            }
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              url: false,
              minimize: false,
              sourceMap: !isProduction,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer],
              sourceMap: !isProduction
            }
          }
        ])
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css'
    }),
    new DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(process.env.NODE_ENV),
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
}

module.exports = webpackConfig
