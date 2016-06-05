'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');
var webpack = require('webpack-stream');

var $ = require('gulp-load-plugins')();

function webpackWrapper(watch, test, callback) {
    var webpackOptions = {
        resolve: { extensions: ['', '.webpack.js', '.web.js', '.js', '.ts'] },
        //resolve: { extensions: ['', '.ts'] },
        watch: watch,
        module: {
            //preLoaders: [{ test: /\.ts$/, exclude: /node_modules/, loader: 'tslint-loader'}],
            preLoaders: [
                { test: /\.ts$/, exclude: /node_modules/, loader: 'tslint-loader'},
                { test: /\.js$/, exclude: /node_modules/, loader: 'eslint-loader'}
            ],
            //loaders: [{ test: /\.ts$/, exclude: /node_modules/, loaders: ['ng-annotate', 'awesome-typescript-loader']}]
            loaders: [
                //{ test: /\.ts$|\.js$/, exclude: /node_modules/, loaders: ['ng-annotate', 'awesome-typescript-loader']}
                { test: /\.ts$/, exclude: /node_modules/, loaders: ['ng-annotate', 'awesome-typescript-loader']},
                { test: /\.js$/, exclude: /node_modules/, loaders: ['ng-annotate', 'babel-loader']}
            ]
        },
        output: { filename: 'index.module.js' }
    };

    if(watch) {
        webpackOptions.devtool = 'inline-source-map';
    }

    var webpackChangeHandler = function(err, stats) {
        if(err) {
            conf.errorHandler('Webpack')(err);
        }
        $.util.log(stats.toString({
            colors: $.util.colors.supportsColor,
            chunks: false,
            hash: false,
            version: false
        }));
        browserSync.reload();
        if(watch) {
            watch = false;
            callback();
        }
    };

    var sources = [path.join(conf.paths.src, '/app/index.module.ts')];
    if (test) {
        sources.push(path.join(conf.paths.src, '/app/**/*.spec.ts'));
    }

    // config environment
    sources.push(path.join(conf.paths.src, '/config/' + (conf.environment ? conf.environment : 'develop') + '.js'));

    return gulp.src(sources)
        .pipe(webpack(webpackOptions, null, webpackChangeHandler))
        .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/app')));
}

gulp.task('scripts', function () {
    return webpackWrapper(false, false);
});

gulp.task('scripts:watch', ['scripts'], function (callback) {
    return webpackWrapper(true, false, callback);
});

gulp.task('scripts:test', function () {
    return webpackWrapper(false, true);
});

gulp.task('scripts:test-watch', ['scripts'], function (callback) {
    return webpackWrapper(true, true, callback);
});
