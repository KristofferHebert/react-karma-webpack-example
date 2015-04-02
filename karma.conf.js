module.exports = function(config) {
  config.set({

    /**
     * These are the files required to run the tests.
     *
     * The `Function.prototype.bind` polyfill is required by PhantomJS
     * because it uses an older version of JavaScript.
     */
    files: [
      './bin/utils/polyfill.js', // PhantomJS polyfill
      './bin/tests/main.js' // Tests for the newsletter app
    ],

    /**
     * The actual tests are preprocessed by the karma-webpack plugin, so that
     * their source can be properly transpiled.
     */
    preprocessors: {
      './bin/tests/main.js': ['webpack']
    },

    /**
     * Start these browsers for testing. PhantomJS is a headless browser.
     * Available browsers: https://npmjs.org/browse/keyword/karma-launcher
     */
    browsers: ['PhantomJS'],

    /**
     * Use Mocha as the test framework, Sinon for mocking, and
     * Chai for assertions.
     */
    frameworks: ['mocha'],

    /**
     * The configuration for the karma-webpack plugin.
     * This is very similar to the main webpack.local.config.js.
     */
    webpack: {
      module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          }
        ]
      },
      resolve: {
        extensions: ['', '.js']
      }
    },

    /**
     * Turn off verbose logging of webpack compilation.
     */
    webpackMiddleware: {
      noInfo: true
    },

    singleRun: false,

    /**
     * Array of plugins used
     */
    plugins: [
      'karma-mocha',
      'karma-phantomjs-launcher',
      'karma-webpack'
    ],

  });
};
