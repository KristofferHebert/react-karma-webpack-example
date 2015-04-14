var path = require('path');
var webpack = require('webpack');

/**
 * Webpack configuration file for production.
 */
module.exports = {
  entry: {
    app: './web_modules/app'
  },
  output: {
    publicPath: '/public/',
    path: path.join(__dirname, '/app/public/'),
    filename: '[name].js'
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
    })
  ],
};
