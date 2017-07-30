const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');
const htmlImport = require('gulp-html-import');
const autoprefixer = require('gulp-autoprefixer');

const browserSync = require('browser-sync').create();

gulp.task('html', function() {
  return gulp.src('./html/index.html')
    .pipe(htmlImport('./html/components/'))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('app/'));
});

