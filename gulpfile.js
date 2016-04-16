'use strict';

var gulp = require('gulp');
var zip = require('gulp-zip');

var outPath = "out/";

var path = "src/*";
var name = "SCStreamModifier.crx"

gulp.task('build', function () {
    gulp.src(path)
        .pipe(zip(name))
        .pipe(gulp.dest(outPath));
});

gulp.task('default', ['build']);