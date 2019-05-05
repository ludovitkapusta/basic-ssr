const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const nodeExternals = require('webpack-node-externals')

module.exports = merge(common, {
  entry: './server/index.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    filename: 'server.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: 'false'
    })
  ],
  optimization: {
    usedExports: true,
    mangleWasmImports: true,
    providedExports: true,
    concatenateModules: true
  }
})
