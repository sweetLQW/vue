const baseConfig = require('./webpack.base');
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

baseConfig.mode = 'development';
baseConfig.devtool = 'eval-source-map';
baseConfig.devServer = {
    host: 'localhost',
    port: 3000,
    // 开启服务后自动打开页面
    open: true,
    hot: true
};
baseConfig.plugins.push(
    new HTMLPlugin({
        filename: 'index.html',
        template: 'src/index.html'
    }),
    // devServer中hot为true时需要增加以下插件
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin
)

module.exports = baseConfig;