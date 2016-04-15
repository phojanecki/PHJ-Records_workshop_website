var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');

gulp.task('task', function(){
  return gulp.src('../scss/main.scss')
  .pipe(sass({errLogToConsole:true, outputStyle:'expanded'}))
  .pipe(gulp.dest('../css'))
});

gulp.task('watch', function(){
  gulp.watch('../scss/main.scss', ['task'])
});
