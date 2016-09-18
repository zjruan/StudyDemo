var gulp = require('gulp');
var path = require('path');
var gulpif = require('gulp-if');
var sprity = require('sprity');
var less = require('gulp-less');
var plumber = require('gulp-plumber');

// generate sprite.png and _sprite.scss
gulp.task('sprites', function () {
  return sprity.src({
    src: './img/icon/*.{png,jpg}',
    style: './sprite.less',
    base64:true,
    // ... other optional options
    // for example if you want to generate scss instead of css
    processor: 'less', // make sure you have installed sprity-sass
    
  })
  .pipe(gulpif('*.png', gulp.dest('./dist/img/'), gulp.dest('./less/')))
});


//less编译
gulp.task('less', function () {
  return gulp.src('./less/*.less')
  	.pipe(plumber())
    .pipe(less({
        paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./dist/css'));
});
