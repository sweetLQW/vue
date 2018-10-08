const baseConfig = require('./webpack.base');
const HTMLPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

console.log('开发环境');
baseConfig.mode = 'development';
baseConfig.devtool = '#cheap-module-eval-source-map';
baseConfig.devServer = {
  port: 8080,
  host: '0.0.0.0',
  overlay: {
    errors: true, // webpack遇到错误显示在网页上
  },
  hot: true, // 更改某模块的时候不用页面整个刷新 只刷新更改的部分 但是需要引入一些插件
  open: true
};
baseConfig.plugins.push(
  new HTMLPlugin({
    filename: 'index.html',
    template: 'index.html'
  })
);
// devServer中hot为true时需要增加以下插件
baseConfig.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin
);
module.exports = baseConfig;