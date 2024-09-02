const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  entry: './src/js/index.js',  // Same entry as production
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',  // Important for dev server to work correctly with routing
  },
  devtool: 'inline-source-map',  // Useful for debugging
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,  // Enable gzip compression
    port: 9000,  // You can change the port if needed
    hot: true,  // Enable Hot Module Replacement
    open: true,  // Automatically open the browser
    historyApiFallback: {
      rewrites: [
        { from: /^\/products$/, to: '/products.html' },
        { from: /^\/services$/, to: '/services.html' },
      ],
    },  // Serve index.html for all 404 routes (useful for SPA)
    watchFiles: ['src/**/*', 'index.html', 'products.html', 'services.html'],  // Watch for changes in these files
  },
  module: {
    rules: [
      {
        test: /\.css$/,  // Matches all .css files
        use: [
          'style-loader',  // Instead of MiniCssExtractPlugin.loader for development
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
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
    new webpack.HotModuleReplacementPlugin(),  // Enable HMR globally
  ],
});
