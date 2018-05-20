const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(css|sass)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          publicPath: '../',
          use: ['css-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
            },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000,
    open: true,
    hot: true,
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      'redux-devtools': path.join(__dirname, '..', '..', 'src'),
      react: path.join(__dirname, 'node_modules', 'react'),
    },
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'tony world',
    filename: 'index.html',
    minify: {
      collapseWhitespace: true,
    },
    template: './src/index.html',
    hash: true,
  }),
  new webpack.NamedModulesPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new ExtractTextPlugin({
    filename: './css/styles.css',
    disable: true,
  }),
  new CleanWebpackPlugin(['dist'])],

};
