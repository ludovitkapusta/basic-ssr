// @ts-nocheck
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack')
const path = require('path')
const createStyledComponentsTransformer = require('typescript-plugin-styled-components')
  .default

const styledComponentsTransformer = createStyledComponentsTransformer()
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')

const appData = require('./assets/local/appData')

module.exports = {
  entry: './client/index.tsx',
  mode: process.env.NODE_ENV || 'development',
  devtool: 'cheap-module-source-map',
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
    filename: '[name].js',
    chunkFilename: '[name].js',
    globalObject: 'this',
    publicPath: '/'
  },
  watch: true,
  module: {
    rules: [
      {
        test: [/\.(j|t)sx?$/],
        loader: 'awesome-typescript-loader',
        exclude: [
          path.resolve(__dirname, 'node_modules/'),
          path.resolve(__dirname, 'tests/'),
          path.resolve(__dirname, 'assets/')
        ],
        options: {
          transpileOnly: true,
          experimentalWatchApi: true,
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
              outputPath: 'assets/dist/fonts/',
              publicPath: 'assets/dist/fonts/'
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
              outputPath: 'assets/dist/img/',
              publicPath: 'assets/dist/img/'
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
              name: '[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    open: true,
    port: 8080
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      __isBrowser__: 'true',
      isPRODUCTION: JSON.stringify(false)
    }),
    new HtmlWebpackPlugin({
      templateParameters: {
        initialState: Object.entries(appData).reduce((acc, red) => {
          const [key, value] = red
          return { ...acc, [key]: value.config }
        }, {})
      },
      template: 'index.html'
    }),
    new Dotenv()
  ]
}
