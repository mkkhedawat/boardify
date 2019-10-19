const gulp = require('gulp');
const path = require('path');
const pug = require('gulp-pug');
const fs = require('fs');
const gulpData = require('gulp-data');
const htmlMin = require('gulp-htmlmin');
const config = require('../../configs/minify');

const pugPath = path.join(__dirname, '..', '..', 'templates', 'pug', 'index.pug');

module.exports = destFolder =>
    new Promise(resolve => {
        gulp.src(pugPath)
            .pipe(gulpData(() => JSON.parse(fs.readFileSync(path.join('.', destFolder, 'data.json')))))
            .pipe(pug({ pretty: true }))
            .pipe(htmlMin(config))
            .pipe(gulp.dest(path.join('.', destFolder)))
            .on('end', resolve);
    });
