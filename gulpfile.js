"use strict";

const gulp = require("gulp");
// runs a local web server
const connect = require('gulp-connect');
// open url in a web browser
const open = require("gulp-open");
// Bundle JS
const browserify = require('browserify');
// Transform React JSX to JS
const reactify = require('reactify');
// Use conventional text streams with Gulp
const source = require('vinyl-source-stream');
// Concatenates files
const concat = require('gulp-concat');
// Lint JS files, including JSX
const lint = require('gulp-eslint');


const config = {
  port: 9005,
  devBaseUrl: 'http://localhost',
  paths: {
    html: './src/*.html',
    js: './src/**/*.js',
    css: [
      'node_modules/bootstrap/dist/css/bootstrap.min.css',
      'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
    ],
    dist: './dist',
    mainJs: './src/main.js'
  }
};

// start a local development server
gulp.task('connect', function () {
  connect.server({
    root: ['dist'],
    port: config.port,
    base: config.devBaseUrl,
    livereload: true
  })
});

gulp.task('open', ['connect'], function () {
  gulp.src('dist/index.html')
    .pipe(open({
      uri: config.devBaseUrl + ':' + config.port + '/'
    }));
});

gulp.task('css', function () {
  gulp.src(config.paths.css)
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(config.paths.dist + '/css'));
});

gulp.task('html', function () {
  gulp.src(config.paths.html)
    .pipe(gulp.dest(config.paths.dist))
    .pipe(connect.reload())
});

gulp.task('js', function () {
  browserify(config.paths.mainJs)
    .transform(reactify)
    .bundle()
    .on('error', console.error.bind(console))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(config.paths.dist + '/scripts/'))
    .pipe(connect.reload())
});

gulp.task('lint', function () {
  return gulp.src(config.paths.js)
    .pipe(lint())
    .pipe(lint.format());
});

gulp.task('watch', function () {
  gulp.watch(config.paths.html, ['html']);
  gulp.watch(config.paths.js, ['js', 'lint']);
});

gulp.task('default', ['html', 'js', 'css', 'lint', 'open', 'watch']);