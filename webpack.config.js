const {
  VueLoaderPlugin
} = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path')
module.exports = {
  mode: 'production',
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'webpack-demo.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public/index.html')
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin()
  ],
  devServer: {
    open: true,
    port: 60000
  },
  module: {
    rules: [{
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
      },
      {
        test: /\.(png|gif)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024
          }
        },
        generator: {
          filename: 'images/[hash:6][ext]'
        }
      },

      {
        test: /\.(eot|svg|ttf|woff|woff2)/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 2 * 1024
          }
        },
        generator: {
          filename: 'fonts/[hash:6][ext]'
        }
      },
      // 1. 匹配js文件
      // 2. loader的对象写法
      // 3. loader的配置对象,options
      // 4. 给loader添加预设
      {
        test: /\.js$/i,
        exclude: path.join(__dirname, 'node_modules'),
        use: [{
          loader: 'babel-loader',
          // options: {
          //   presets: ['@babel/preset-env']
          // }
        }]
      },
      {
        test: /\.vue/i,
        use: ['vue-loader']
      }
    ]
  }
}