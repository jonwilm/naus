const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');
const htmlImport = require('gulp-html-import');
const autoprefixer = require('gulp-autoprefixer');
const phpMinify = require('@aquafadas/gulp-php-minify');
const browserSync = require('browser-sync').create();

gulp.task('html', function() {
  return gulp.src('./html/index.html')
    .pipe(htmlImport('./html/components/'))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('app/'));
});

gulp.task('img', function(){
  gulp.src('html/img/**/*')
    .pipe(gulp.dest('app/img'))
});

gulp.task('css', function(){
  return gulp.src('html/css/*.css')
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(gulp.dest('app/css'))
})

gulp.task('js', function(){
  gulp.src('html/js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('app/js/'))
})

gulp.task('php', function (){
	gulp.src('html/php/*.php')
  .pipe(gulp.dest('app/php/'))
	});

gulp.task('default',['html', 'css', 'js', 'php'], function(){
	
});