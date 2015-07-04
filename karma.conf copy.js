module.exports = function(config) {
  config.set({
    singleRun: false,

    /**
     * These are the files required to run the tests.
     *
     * The `Function.prototype.bind` polyfill is required by PhantomJS
     * because it uses an older version of JavaScript.
     */
    files: [
      './bin/utils/polyfill.js',
      './node_modules/babel-core/browser.js',
      './node_modules/babel-core/browser-polyfill.js',
      //'./app/**/*.js',
      './bin/tests/**/*.js'
    ],

    /**
     * The actual tests are preprocessed by the karma-webpack plugin, so that
     * their source can be properly transpiled.
     */
    preprocessors: {
      './app/**/*.js': ['babel', 'commonjs'],
      './bin/tests/**/*.js': ['babel', 'commonjs']
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

    babelPreprocessor: {
      options: {
        stage: 0,
      }
    },
    client: {
      mocha: {
        reporter: 'html', // change Karma's debug.html to the mocha web reporter
        ui: 'tdd'
      }
    }
  });
};
