var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.local.config');

/**
 * Webpack development server
 * http://webpack.github.io/docs/webpack-dev-server.html
 */
new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  noInfo: true,
  historyApiFallback: true
}).listen(9090, 'localhost', function (error, result) {
  if (error) {
    console.log(error);
  }
});
