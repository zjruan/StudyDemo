var gulp = require('gulp');

var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
 return gulp.src('./src/sass/**/*.scss')
  .pipe(sourcemaps.init())
  
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(autoprefixer({
    browsers: ['> 1%'],
    cascade: false
  }))
  .pipe(sourcemaps.write('../maps'))
  
  .pipe(gulp.dest('./dist/css'));
});