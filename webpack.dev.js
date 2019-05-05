const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  entry: './client/index.js',
  node: { fs: 'empty' },
  mode: 'development'
  // plugins: [new webpack.HotModuleReplacementPlugin()]
})
