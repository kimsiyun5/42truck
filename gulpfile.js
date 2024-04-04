const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
// const pug = require('gulp-pug');
const uglify = require('gulp-uglify');

// Pug 파일을 HTML로 컴파일하고 dist 폴더로 복사
function buildPug() {
  return gulp.src('src/views/*.pug')
    // .pipe(pug())
    .pipe(gulp.dest('dist/views'));
}

// SCSS 파일을 CSS로 컴파일하고 dist 폴더로 복사
function buildSass() {
  return gulp.src('src/client/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public/css'));
}

// JavaScript 파일을 압축하고 dist 폴더로 복사
function buildJs() {
  return gulp.src('src/client/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('public/js'));
}

// Pug 파일을 HTML로 컴파일하고 dev 폴더로 복사 (watch 작업용)
// function watchPug() {
//   return gulp.src('src/views/**/*.pug')
//     // .pipe(pug())
//     .pipe(gulp.dest('dev/views'));
// }

// SCSS 파일을 CSS로 컴파일하고 src/client 폴더로 복사 (watch 작업용)
function watchSass() {
  return gulp.src('src/client/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/dist/css'));
}

// JavaScript 파일을 압축하고 src/client 폴더로 복사 (watch 작업용)
function watchJs() {
  return gulp.src('src/client/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('src/dist/js'));
}

// 기본 빌드 작업
exports.build = gulp.parallel(buildPug, buildSass, buildJs);

// 파일 변경 감지 작업 (dev 폴더로 출력)
exports.watch = function() {
  // gulp.watch('src/views/**/*.pug', watchPug);
  gulp.watch('src/client/scss/*.scss', watchSass);
  gulp.watch('src/client/js/*.js', watchJs);
};
