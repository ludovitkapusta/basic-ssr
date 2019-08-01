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
      '@routes': path.resolve(__dirname, 'src/routes/')
    },
    extensions: ['.ts', '.tsx', '.js']
  },
  output: {
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: [/\.(j|t)sx?$/],
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/,
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
              outputPath: '/fonts'
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
              outputPath: '/img'
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
      isPRODUCTION: JSON.stringify(true)
    })
  ]
}
