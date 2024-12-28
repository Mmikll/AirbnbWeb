const { watch, dest, src, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function css(){
    return src('./src/scss/app.scss')
        .pipe(sass())
        .pipe(dest('build/css'))
}

function imagen(){
    return src('./src/img/**/*')
        .pipe(imagemin({optimizationLevel: 3}))
        .pipe(dest('build/assets'))
}

function dev(){
    watch('./src/scss/**/*.scss', css);
    watch('./src/img/**/*', imagen);
}

exports.dev = dev;
exports.default = series(css, imagen, dev);