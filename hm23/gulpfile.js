const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean');
const uglify = require('gulp-uglify');

const rootHtml = './src/**.html';
const rootCss = './src/css/**.css';
const rootJs = './src/**/**.js';

function copyHtml() {
   return gulp.src(rootHtml).pipe(gulp.dest('./dist'));
}

function compilingCss() {
   return gulp
      .src(rootCss)
      .pipe(concat('style-min.css'))
      .pipe(cleanCSS())
      .pipe(autoprefixer())
      .pipe(gulp.dest('./dist/css'));
}

function uglifyJs() {
   return gulp
      .src(rootJs)
      .pipe(concat('app-min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./dist/js'));
}

function clearDist() {
   return gulp.src('dist/**.*', { read: false }).pipe(clean());
}

module.exports = {
   dev: gulp.series(
      clearDist,
      gulp.parallel(copyHtml, compilingCss, uglifyJs)
   ),
};
