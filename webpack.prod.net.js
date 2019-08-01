const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')

const common = require('./webpack.common.js')

module.exports = merge(common, {
  entry: {
    main: './server/SSR.tsx'
  },
  mode: 'production',
  output: {
    filename: '[name].net.js',
    path: path.resolve(__dirname, 'assets/dist.net'),
    publicPath: '/assets/dist.net'
  },
  optimization: {
    usedExports: true,
    mangleWasmImports: true,
    providedExports: true,
    concatenateModules: true,
    runtimeChunk: {
      name: 'runtime'
    },
    splitChunks: {
      cacheGroups: {
        commons: {
          reuseExistingChunk: true,
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: 'false',
      isPRODUCTION: JSON.stringify(true)
    })
  ]
})
