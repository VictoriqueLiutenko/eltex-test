const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const concatCss = require("gulp-concat-css");
const imagemin = require("gulp-imagemin");
const pngquant = require("imagemin-pngquant");
const webpack = require("webpack-stream");
const { parallel } = require("gulp");

function html() {
  return gulp.src("./src/index.html").pipe(gulp.dest("./dist"));
}

function css() {
  return gulp
    .src("./src/scss/*.scss")
    .pipe(sass())
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(
      autoprefixer(["last 15 versions", "> 1%", "ie 8", "ie 7"], {
        cascade: true
      })
    )
    .pipe(concatCss("index.css"))
    .pipe(gulp.dest("./dist"));
}

function js() {
  return gulp
    .src("./src/js/*.js")
    .pipe(
      webpack({
        output: {
          filename: "index.js"
        }
      })
    )
    .pipe(gulp.dest("./dist"));
}

function images() {
  return gulp
    .src("./src/images/**/*")
    .pipe(
      imagemin({
        interlaced: true,
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        use: [pngquant()]
      })
    )
    .pipe(gulp.dest("./dist/images"));
}

function watchFiles() {
  gulp.watch("./src/scss/**/*.scss", css);
  gulp.watch("./src/js/*.js", js);
  gulp.watch("./src/img/**/*", images);
  gulp.watch("./src/*.html", html);
}

exports.js = js;
exports.css = css;
exports.html = html;
exports.images = images;
exports.watch = watchFiles;
exports.default = parallel(html, css, js, images);
