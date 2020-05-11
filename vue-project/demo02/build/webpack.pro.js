const baseConfig = require('./webpack.base');
const HTMLPlugin = require('html-webpack-plugin')

baseConfig.mode = 'production';
baseConfig.plugins.push(
    new HTMLPlugin({
        filename: '../index.html',
        template: 'src/index.html'
    })
)

module.exports = baseConfig;