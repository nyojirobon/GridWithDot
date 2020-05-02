const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: './src/client/index.html',
  filename: './index.html'
})

module.exports = {
  entry: './src/client/index.js',
  output: {
    path: path.resolve('dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      }
    ]
  },
  devtool: 'inline-source-map',
  plugins: [htmlWebpackPlugin]
}
