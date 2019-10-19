const path = require('path');
const browserSync = require('browser-sync').create();
const texts = require('../texts');
const boxen = require('../libs/boxen');
const generate = require('./generate');

const { runFolder, dataFolder } = require('../configs');

module.exports = async () => {
    boxen(texts.welcome);
    await generate(runFolder, dataFolder);

    browserSync.init({
        watch: true,
        server: { baseDir: path.join('.', runFolder) },
        files: [
            path.join('.', runFolder, '*.html'),
            {
                match: [path.join('.', dataFolder, '*.json')],
                fn: async () => {
                    await generate(runFolder, dataFolder);
                    browserSync.reload();
                },
            },
        ],
    });
};
