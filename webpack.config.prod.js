const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'production',
  entry: './src/js/index.js',  // Your JS entry file, where you import CSS
  output: {
    filename: 'bundle.js',  // JS bundle output
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,  // Matches all .css files
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'output.css',  // The final CSS file name
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',  // Output file for index page
      template: './index.html',  // Source template file
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      filename: 'products.html',  // Output file for products page
      template: './products.html',  // Source template file
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      filename: 'services.html',  // Output file for services page
      template: './services.html',  // Source template file
      inject: 'body',
    }),
    new CopyPlugin({
      patterns: [
        { from: 'img', to: 'img' },
        { from: 'animations', to: 'animations' },
        { from: 'assets', to: 'assets' },
        // Add any other assets to be copied to dist
      ],
    }),
  ],
});
