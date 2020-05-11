// @ts-nocheck
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const Dotenv = require('dotenv-webpack')

const common = require('./webpack.common.js')

module.exports = merge(common, {
  entry: './client/index.tsx',
  output: {
    path: path.resolve(__dirname, 'assets/local'),
    filename: 'bundle.js',
    chunkFilename: '[name].chunk.js',
  },
  node: { fs: 'empty' },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: 'true',
    }),
    new Dotenv(),
  ],
})
