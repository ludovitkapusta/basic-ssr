// @ts-nocheck
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

/**
 * Transpile Typescript file with initial Props so
 * we can import and inject these data during local development via
 * HtmlWebpackPlugin into the index.html file
 */
module.exports = {
  mode: 'production',
  entry: './server/appData/index.ts',
  output: {
    path: path.resolve(__dirname, 'assets/local'),
    filename: 'appData.js',
    library: 'beta',
    libraryTarget: 'umd',
    globalObject: "typeof self !== 'undefined' ? self : this",
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: [/\.(j|t)sx?$/],
        loader: 'awesome-typescript-loader',
        exclude: [
          path.resolve(__dirname, 'node_modules/'),
          path.resolve(__dirname, 'tests/'),
          path.resolve(__dirname, 'assets/'),
        ],
      },
    ],
  },
}
