const gulp = require('gulp');
const path = require('path');

const materializeJSPath = path.join(__dirname, '..', '..', '..', 'node_modules', 'materialize-css', 'dist', 'js', 'materialize.min.js');

module.exports = destFolder =>
    new Promise(resolve => {
        gulp.src(materializeJSPath)
            .pipe(gulp.dest(path.join('.', destFolder, 'js')))
            .on('end', resolve);
    });
