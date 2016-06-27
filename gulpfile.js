var gulp = require('gulp');
var concat = require('gulp-concat');
var less= require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('scripts', ['bootstrapjs'], function() {
    return gulp.src(['./js/jquery.js',
                     './bower_components/bootstrap_less/',
                     './js/**/*.js',
                     './js/*.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist/'));
});
gulp.task('bootstrapjs', function() {
    return gulp.src(['./bower_components/bootstrap_less/js/*.js'])
        .pipe(concat('bootstrap.js'))
        .pipe(gulp.dest('./bower_components/bootstrap_less/'))
});

gulp.task('css', function() {
    return gulp.src(['./css/**/*.css', './bower_components/bootstrap-less/bootstrap.css'])
        .pipe(concat('all.css'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('bootstrap-less', function(){
    return gulp.src('./bower_components/bootstrap-less/less/bootstrap.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./bower_components/bootstrap-less/'));
});

gulp.task('sass', ['bootstrap-less', 'css'], function() {

});
gulp.task('default',['sass', 'scripts'], function() {
  // place code for your default task here
});
