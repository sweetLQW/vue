const baseConfig = require('./webpack.base');
const HTMLPlugin = require('html-webpack-plugin');

console.log('生产环境');
baseConfig.mode = 'production';
baseConfig.plugins.push(
  new HTMLPlugin({
    filename: '../index.html',
    template: 'index.html'
  })
);
module.exports = baseConfig;