const path = require('path')

var BUILD_DIR = path.resolve(__dirname, 'public')
var SRC_DIR = path.resolve(__dirname, 'src')

var config = {
  entry: SRC_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js/,
        include: SRC_DIR,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: './public',
    hot: true,
    historyApiFallback: true,
    open: true
  }
}

module.exports = config
