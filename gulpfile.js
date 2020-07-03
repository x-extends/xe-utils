const gulp = require('gulp')

gulp.task('build', () => {
  return gulp.src('./func/*')
    .pipe(gulp.dest('./'))
})
