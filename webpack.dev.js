const webpack = require('webpack')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')
const Dotenv = require('dotenv-webpack')

const common = require('./webpack.common.js')

module.exports = merge(common, {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'assets/local'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      }
    ]
  },
  node: { fs: 'empty' },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      __isBrowser__: 'true'
    }),
    new Dotenv()
  ]
})
