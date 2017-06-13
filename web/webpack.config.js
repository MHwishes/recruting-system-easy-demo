var HtmlwebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
 entry: {
    'index': './src/main.js'
  },

    output: {               //打包后的文件
        path: __dirname+ '/public/assets/',   //表示使用绝对路径
        filename: '[name].js' //输出文件名

    },
    module: {
        loaders: [            //用于加载一些静态文件夹（css样式，图片之类）
          { test: /\.css$/, loader: "style!css" },
          {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/, //不进行转换的文件，可以提高打包速度
                query: {
                    presets: ['react', 'es2015']
                }
           }
        ]
    },
    plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      filename: 'vendors.js'
    }),
    new ExtractTextPlugin('[chunkhash:8].[name].css'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      minify: {collapseWhitespace: true},
      template: path.join(__dirname, 'index.html'),
      inject: true,
      chunks: ['index', 'vendors']
    })
  ],
  resolve: {
    alias: {
      'bootstrap.css': 'bootstrap/dist/css/bootstrap.min.css'
    }
  }
};

//  config.plugins.push(htmlwebpackPluginBuilder('index.html', ['index']));

module.exports = config;