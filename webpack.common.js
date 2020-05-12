// @ts-nocheck
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const webpack = require('webpack')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const createStyledComponentsTransformer = require('typescript-plugin-styled-components')
  .default

const styledComponentsTransformer = createStyledComponentsTransformer()

module.exports = {
  mode: process.env.NODE_ENV,
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@theme': path.resolve(__dirname, 'src/theme/'),
      '@widgets': path.resolve(__dirname, 'src/widgets/'),
      '@store': path.resolve(__dirname, 'src/store/'),
      '@server': path.resolve(__dirname, 'server/'),
      '@helpers': path.resolve(__dirname, 'src/helpers/')
    },
    extensions: ['.ts', '.tsx', '.js']
  },
  output: {
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      },
      {
        test: [/\.(j|t)sx?$/],
        loader: 'awesome-typescript-loader',
        exclude: [
          path.resolve(__dirname, 'node_modules/'),
          path.resolve(__dirname, 'tests/'),
          path.resolve(__dirname, 'assets/')
        ],
        options: {
          getCustomTransformers: () => ({
            before: [styledComponentsTransformer]
          })
        }
      },
      {
        test: [/\.(ttf|woff|woff2|eot)$/],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: '/fonts',
              publicPath: '/assets/dist/fonts/'
            }
          }
        ]
      },
      {
        test: [/\.(png|jpg|jpeg|gif)$/],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: '/img',
              publicPath: '/assets/dist/img/'
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
      {
        test: /(500).html$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: '/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new webpack.DefinePlugin({
      __isBrowser__: 'true',
      isPRODUCTION: JSON.stringify(true),
      'process.env': JSON.stringify(process.env)
    })
  ]
}
