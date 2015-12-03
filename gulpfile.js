var gulp = require('gulp'),
  //less = require('gulp-less'),
  livereload = require('gulp-livereload'),
  browserSync = require('browser-sync').create();

gulp.task('default', ['serve']);

gulp.task('serve', function () {
  browserSync.init({
    server: "./"
  });

  gulp.watch("css/*.css").on('change', browserSync.reload);
  gulp.watch("index.html").on('change', browserSync.reload);
  gulp.watch("js/*.js").on('change', browserSync.reload);
});
