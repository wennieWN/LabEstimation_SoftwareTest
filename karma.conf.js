// karma.conf.js

var webpackConfig = require('./build/webpack.test.conf')
module.exports = function (config) {
  config.set({

    // 测试使用的框架
    frameworks: ['mocha'],

    // 测试入口
    files: [
      'test/**/*.spec.js'
    ],

    // 对指定文件进行预处理
    preprocessors: {
      '**/*.spec.js': ['webpack', 'sourcemap']
    },

    // webpack打包规则
    webpack: webpackConfig,

    // 结果存在哪里
    reporters: ['spec'],

    // 测试器环境
    browsers: ['Chrome']
  })
}