const webpackConfig = require('../webpack/webpack.config');

module.exports = function(config) {
    config.set({
        basePath: '../',
        frameworks: ['mocha', 'chai'],
        files: [
            { pattern: './test/**/*.js'},
        ],
        preprocessors: {
            './test/**/*.js': ['webpack']
        },
        webpack: webpackConfig,
        webpackMiddleware: {
            stats: 'errors-only',
        },
        reporters: ['progress'],
        port: 9876,  // karma web server port
        colors: true,
        logLevel: config.LOG_INFO,
        browsers: ['ChromeHeadless'],
      });
};
