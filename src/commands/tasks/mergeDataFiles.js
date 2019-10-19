const gulp = require('gulp');
const path = require('path');
const merge = require('gulp-merge-json');

module.exports = (destFolder, dataFolder) =>
    new Promise(resolve => {
        gulp.src(path.join('.', dataFolder, '*.json'))
            .pipe(
                merge({
                    fileName: 'data.json',
                    edit: (json, file) => {
                        const filename = path.basename(file.path);
                        return { [filename.replace(path.extname(filename), '')]: json };
                    },
                }),
            )
            .pipe(gulp.dest(path.join('.', destFolder)))
            .on('end', resolve);
    });
