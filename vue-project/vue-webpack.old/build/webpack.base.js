const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// const HTMLPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');
// extract-text-webpack-plugin把css代码从js文件中抽离出来，单独生成模块
const Ex = require('extract-text-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

// const isDev = process.env.NODE_ENV === 'development';
const baseConfig = {
  target: 'web',
  entry: path.join(__dirname, '../src/main.js'),
  output: {
    filename: 'main.[hash].js',
    path: path.join(__dirname, '../dist/static')
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.jsx$/,
        loader: "babel-loader"
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 2048, // 小于1024时转base64
            name: 'images/[name].[hash].[ext]' // ext 文件扩展名
          }
        }]
      },
      {
        test: /\.css/,
        use: Ex.extract({
          fallback: "style-loader",
          use: ['css-loader', 'postcss-loader']
        })
      },
      {
        test: /\.less/,
        use: Ex.extract({
          fallback: "style-loader",
          use: ['css-loader', 'postcss-loader', 'less-loader']
        })
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(), // 使用vue-loader徐额外引入此插件
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: isDev ? '"development"' : '"production"'
    //   }
    // }), // webpack在编译过程中或者js代码中可以获取到process.env中的变量
    // new HTMLPlugin({
    //   filename: isDev ? 'index.html' : '../index.html',
    //   template: 'index.html'
    // }),
    new Ex('main.[hash].css')
  ]
};

// 开发环境
// if (isDev) {
//   baseConfig.devtool = '#cheap-module-eval-source-map';
//   baseConfig.devServer = {
//     port: 8080,
//     host: '0.0.0.0',
//     overlay: {
//       errors: true, // webpack遇到错误显示在网页上
//     },
//     hot: true, // 更改某模块的时候不用页面整个刷新 只刷新更改的部分 但是需要引入一些插件
//     open: true
//   };
//   // devServer中hot为true时需要增加以下插件
//   baseConfig.plugins.push(
//     new webpack.HotModuleReplacementPlugin(),
//     new webpack.NoEmitOnErrorsPlugin
//   );
// }

module.exports = baseConfig;