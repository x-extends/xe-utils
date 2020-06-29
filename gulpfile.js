const gulp = require('gulp')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')
const rename = require('gulp-rename')
const replace = require('gulp-replace')
const pack = require('./package.json')

gulp.task('copy', function () {
  return gulp.src('methods/*')
    .pipe(gulp.dest('./'))
})

gulp.task('build', gulp.parallel('copy'))
