var gulp = require('gulp');

gulp.sass       = require('gulp-sass');
gulp.concat     = require('gulp-concat');
gulp.cleanCSS   = require('gulp-clean-css');
gulp.rename     = require('gulp-rename');
gulp.minify     = require('gulp-minify');
gulp.remote     = require('gulp-remote-src');
gulp.merge      = require('merge2');
gulp.gulp       = require('gulp-minify');
gulp.sourcemaps = require('gulp-sourcemaps');

gulp.task('build', function () {

    var remoteStylesheet = gulp.remote([
        'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.4.0/styles/github.min.css',
        'https://cdnjs.cloudflare.com/ajax/libs/mermaid/6.0.0/mermaid.min.css'
    ], {
        base: ''
    });

    var localStylesheet = gulp.src('./source/stylesheet.scss');

    gulp.merge(remoteStylesheet, localStylesheet)
        .pipe(gulp.sass().on('error', gulp.sass.logError))
        .pipe(gulp.concat('docrx.css'))
        .pipe(gulp.dest('./build'))
        .pipe(gulp.rename('docrx.min.css'))
        .pipe(gulp.cleanCSS())
        .pipe(gulp.dest('./build'));


    var remoteJavascript = gulp.remote([
        'https://cdnjs.cloudflare.com/ajax/libs/mermaid/6.0.0/mermaid.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.4.0/highlight.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/marked/0.3.6/marked.min.js',
        'http://cdn.zingchart.com/zingchart.min.js'
    ], {
        base: ''
    });

    var localJavascript = gulp.src('./source/docrx.js');

    gulp.merge(remoteJavascript, localJavascript)
        .pipe(gulp.sourcemaps.init())
        .pipe(gulp.concat('docrx.js'))
        .pipe(gulp.dest('./build'))
        .pipe(gulp.rename('docrx.min.js'))
        //.pipe(gulp.minify())
        .pipe(gulp.sourcemaps.write())
        .pipe(gulp.dest('./build'));

});
