var path = require('path');
var webpack = require('webpack');

/**
 * Webpack configuration file for production.
 */
module.exports = {
  entry: {
    app: './web_modules/app/index',
    newsletters: './web_modules/newsletter/index',
    worker: './web_modules/newsletter/worker'
  },
  output: {
    publicPath: '/public/js/',
    path: path.join(__dirname, '/app/public/js/'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
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
    })
  ],
};
