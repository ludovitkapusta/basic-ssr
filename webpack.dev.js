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
    chunkFilename: '[name].chunk.js'
  },
  module: {
    rules: [
      {
        test: [/\.(ttf|woff|woff2|eot)$/],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: '/assets/dist/fonts/',
              publicPath: '/assets/dist/fonts/'
            }
          }
        ]
      }
    ]
  },
  node: { fs: 'empty' },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: 'true'
    }),
    new Dotenv()
  ]
})
