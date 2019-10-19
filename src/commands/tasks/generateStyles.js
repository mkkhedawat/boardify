const gulp = require('gulp');
const path = require('path');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const precss = require('precss');
const prefixer = require('autoprefixer');
const htmlMin = require('gulp-htmlmin');
const config = require('../../configs/minify');

const sassPath = path.join(__dirname, '..', '..', 'templates', 'sass', 'index.scss');

module.exports = destFolder =>
    new Promise(resolve => {
        gulp.src(sassPath)
            .pipe(sass().on('error', sass.logError))
            .pipe(postcss([precss, prefixer]))
            .pipe(htmlMin(config))
            .pipe(gulp.dest(path.join('.', destFolder, 'css')))
            .on('end', resolve);
    });
