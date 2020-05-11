const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const baseConfig = {
    mode: 'development',
    // __dirname代表当前文件的目录
    entry: path.join(__dirname, '../src/index.js'),
    // output配置：会在demo03/dist/static目录下生成index.js文件
    output: {
        filename: 'index.js',
        path: path.join(__dirname, '../dist/static')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
			}
        ]
    },
    plugins: [
        // 使用vue-loader徐额外引入此插件
        new VueLoaderPlugin()
    ]
}

module.exports = baseConfig;