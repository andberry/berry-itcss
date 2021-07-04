// gulp base
const { src, dest } = require('gulp');

// css
const sass = require('gulp-sass');
sass.compiler = require('sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

// various
const rename = require('gulp-rename');



/*
    Css Tasks
*/
function cssDev() {
  return src("./src/scss/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({
      'outputStyle': 'compressed',
      'precision': 8,
      'includePaths': ['./node_modules']
    }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(dest("./css/"))
    .pipe(dest("./pl/source/css/")) // Pattern Lab
    .pipe(browserSync.stream());

}


function cssProd() {
  return src("./src/scss/*.scss")
    .pipe(sass({
      'outputStyle': 'compressed',
      'precision': 8,
      'includePaths': ['./node_modules']
    }).on('error', sass.logError))
    .pipe(autoprefixer({ grid: 'no-autoplace' }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(dest("./css/"))
    .pipe(dest("./pl/source/css/")) // Pattern Lab
    // .pipe(touch());
}



/*
    Exports public tasks
*/
exports.cssDev = cssDev;
exports.cssProd = cssProd;
exports.default = cssDev;
