const gulp = require('gulp')
const fs = require('fs')
const del = require('del')
const replace = require('gulp-replace')
const rename = require('gulp-rename')
const pack = require('./package.json')

const esmOutDir = 'es'
const commOutDir = 'lib'

// 已废弃
const oldOutDir = 'dist'

gulp.task('build_cm_js', () => {
  return gulp.src('src/*')
    .pipe(gulp.dest('./'))
    .pipe(gulp.dest(commOutDir))
})

gulp.task('build_commonjs_var', () => {
  return gulp.src('src/ctor.js')
    .pipe(replace(/'@VERSION'/, `'${pack.version}'`))
    .pipe(gulp.dest('./'))
    .pipe(gulp.dest(commOutDir))
})

gulp.task('build_commonjs', gulp.series('build_cm_js', 'build_commonjs_var'))

gulp.task('build_escode', gulp.series(async function () {
  return gulp.src('src/*.js')
    .pipe(replace(/'@VERSION'/, `'${pack.version}'`))
    .pipe(replace(/var\s([a-zA-Z_]+)\s=\srequire\(('[a-zA-Z_./]+')\)/g,'import $1 from $2'))
    .pipe(replace('module.exports = ', `export default `))
    .pipe(gulp.dest(esmOutDir))
}))

gulp.task('build_d_ts', () => {
  return gulp.src('src/*.ts')
    .pipe(gulp.dest(esmOutDir))
})

gulp.task('build_es_var', () => {
  return gulp.src(`${esmOutDir}/ctor.js`)
    .pipe(replace(/'@VERSION'/, `'${pack.version}'`))
    .pipe(gulp.dest(esmOutDir))
})

gulp.task('build_es', gulp.series('build_escode', 'build_d_ts', 'build_es_var', function () {
  return gulp.src(`${esmOutDir}/index.js`)
    .pipe(rename({
      basename: 'index',
      extname: '.esm.js'
    }))
    .pipe(gulp.dest(esmOutDir))
}))

gulp.task('clear', () => {
  return del([
    esmOutDir,
    commOutDir,
    oldOutDir
  ])
})

gulp.task('build', gulp.series('clear', gulp.series('build_commonjs', 'build_es')))
