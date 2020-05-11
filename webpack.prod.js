// @ts-nocheck
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')

const common = require('./webpack.common.js')

module.exports = merge(common, {
  entry: './client/index.tsx',
  mode: 'production',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'assets/dist'),
    publicPath: '/assets/dist',
  },
  optimization: {
    usedExports: true,
    mangleWasmImports: true,
    providedExports: true,
    concatenateModules: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: 'false',
      isPRODUCTION: JSON.stringify(true),
    }),
  ],
})
