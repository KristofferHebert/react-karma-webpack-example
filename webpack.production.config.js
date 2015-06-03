var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * Webpack configuration file for production.
 */
module.exports = {
  entry: {
    app: './web_modules/app'
  },
  output: {
    publicPath: '/',
    path: path.join(__dirname, '/dist'),
    filename: '[name].[hash].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new HtmlWebpackPlugin()
  ],
};
