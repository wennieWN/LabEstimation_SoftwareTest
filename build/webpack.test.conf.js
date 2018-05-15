// This is the webpack config used for unit tests.
    // 下面是工具配置文件，用来处理各种css文件
    var utils = require('./utils')
    // 引入webpack模块，使用内置插件或者方法
    var webpack = require('webpack')
    // 下面是用webpack-merge插件，用来合并配置对象
    var merge = require('webpack-merge')
    // 下面是webpack.base.conf.js配置文件，请自行查看我的其他博客
    var baseConfig = require('./webpack.base.conf')
    // 下面是合并配置对象
    var webpackConfig = merge(baseConfig, {
    // use inline sourcemap for karma-sourcemap-loader
    module: {
        rules: utils.styleLoaders()
    },
    // 测试环境使用 inline-source-map生成map文件
    devtool: '#inline-source-map',
    resolveLoader: {
        // 下面是配置如何解析Loader的，就是说使用scss-loader实际用sass-loader
        alias: {
        // necessary to to make lang="scss" work in test when using vue-loader's ?inject option 
        // see discussion at https://github.com/vuejs/vue-loader/issues/724
        'scss-loader': 'sass-loader'
        }
    },
    plugins: [
        // 下面设置环境变量process.env是"testing"
        new webpack.DefinePlugin({
            'process.env': require('../config/test.env')
        })
    ]
    })

    // no need for app entry during tests
    // 测试环境不需要入口文件，因为要测试的就是入口文件，哈哈
    // 使用delete操作符，删除对象中的某一项
    delete webpackConfig.entry

    module.exports = webpackConfig
