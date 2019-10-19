const gulp = require('gulp');
const path = require('path');

const dataTemplatesPath = path.join(__dirname, '..', '..', 'templates', 'data', '*.json');

module.exports = (destFolder, dataFolder) =>
    new Promise(resolve => {
        gulp.src(dataTemplatesPath)
            .pipe(gulp.dest(path.join('.', destFolder, dataFolder)))
            .on('end', resolve);
    });
