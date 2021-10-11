/* eslint-disable no-undef */
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
  // https://webpack.js.org/configuration/entry-context/#entry
  entry: path.join(__dirname, 'src', 'index.tsx'),
  // https://webpack.js.org/concepts/output/
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'boundle.js'
  },
  target: 'web',
  resolve: {
    extensions: [ '.js', '.jsx', '.json', '.ts', '.tsx' ]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'awesome-typescript-loader'
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      },
      {
        test: /\.css$/,
        exclude: [ /node_modules/ ],
        use: [
        // https://github.com/webpack-contrib/style-loader
        // https://github.com/webpack-contrib/mini-css-extract-plugin
          'style-loader',
          {
              // https://github.com/webpack-contrib/css-loader
            loader: 'css-loader',

              // https://github.com/webpack-contrib/css-loader#options
            options: {
              import: true, // Lehessen css fájlokon belül importálni, amik require-re alakulnak át.
              modules: {
                localIdentName: '[local]--[hash:base64:5]',
                exportLocalsConvention: 'camelCase' // https://github.com/webpack-contrib/css-loader#exportlocalsconvention
              },
              importLoaders: 1 // https://github.com/webpack-contrib/css-loader#importloaders
            }
          },
          {
              // https://github.com/postcss/postcss-loader
            loader: 'postcss-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    // https://webpack.js.org/plugins/provide-plugin/
    new webpack.ProvidePlugin({
      log: [ path.resolve('./common/Logger/log'), 'default' ]
    }),
    // https://webpack.js.org/plugins/html-webpack-plugin/
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html')
    }),
    new MiniCssExtractPlugin({
      filename: './src/Main.css'
    })
  ],
  // https://webpack.js.org/configuration/mode/
  mode: 'development'
}
