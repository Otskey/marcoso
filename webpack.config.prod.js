const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new CopyPlugin({
      patterns: [
        { from: 'img', to: 'img' },
        { from: 'css', to: 'css' },
        { from: 'js/vendor', to: 'js/vendor' },
        { from: 'robots.txt', to: 'robots.txt' },
        { from: '404.html', to: '404.html' },
        { from: 'assets/site.webmanifest', to: 'site.webmanifest' },
        { from: 'assets/apple-touch-icon.png', to: 'apple-touch-icon.png' },
        { from: 'assets/favicon.ico', to: 'favicon.ico' },
        { from: 'assets/favicon-16x16.png', to: 'favicon-16x16.png' },
        { from: 'assets/favicon-32x32.png', to: 'favicon-32x32.png' },
        { from: 'assets/mstile-150x150.png', to: 'mstile-150x150.png' }, // Corrected name
        { from: 'assets/android-chrome-192x192.png', to: 'android-chrome-192x192.png' },
        { from: 'assets/android-chrome-512x512.png', to: 'android-chrome-512x512.png' },
      ],
    }),
  ],
});
