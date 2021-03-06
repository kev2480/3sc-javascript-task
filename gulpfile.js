var gulp = require('gulp');
var browserify = require('gulp-browserify');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var hbsfy = require('hbsfy');

gulp.task('browserify', function() {
  gulp.src('src/js/main.js')
    .pipe(browserify({transform: 'hbsfy'}))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/js'));
  gulp.src('src/js/sidemenu.js')
    .pipe(browserify({transform: 'hbsfy'}))
    .pipe(concat('sidemenu.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function() {
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
    //CSS copy
  gulp.src(['src/css/**/*'])
    .pipe(gulp.dest('dist/css'));

});

gulp.task('watch', ['build'], function() {
  gulp.watch('src/**/*.*', ['build']);
});

gulp.task('default', ['watch']);

gulp.task('build', ['browserify', 'copy']);
