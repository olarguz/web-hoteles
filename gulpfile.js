(function () {
    'use strict';
    let gulp = require('gulp');
    let concat = require('gulp-concat');
    let inject = require('gulp-inject');
    let series = require("gulp-series");
    let nodemon = require('gulp-nodemon');

    series.registerTasks({
        scripts: _scriptCompilation,
        start: init
    });
    series.registerSeries("default", ["scripts", "start"]);

    function _scriptCompilation() {
        return gulp.src('public/vendor/**/*.js')
                .pipe(concat('lib.js'))
                .pipe(gulp.dest('./public/dist/'));
    }

    function init() {
        nodemon({
            script: 'index.js'
            , env: {'NODE_ENV': 'development'}
        })
    }

})();
