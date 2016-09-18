var gulp = require('gulp');
var webpack = require('webpack-stream');
var named = require('vinyl-named');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('default', function() {
  return gulp.src('src/js/pages/*.js')
    
    .pipe(named())
    .pipe(webpack())
    // .pipe(sourcemaps.init())
    // .pipe(uglify())
    // .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest('dist/js/'));
});