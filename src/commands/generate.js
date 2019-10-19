const fs = require('fs');
const texts = require('../texts');
const boxen = require('../libs/boxen');
const mergeDataFiles = require('./tasks/mergeDataFiles');
const generateWebFiles = require('./tasks/generateWebFiles');
const generateStyles = require('./tasks/generateStyles');
const copyScripts = require('./tasks/copyScripts');

module.exports = async (destFolder, dataFolder) => {
    if (!fs.existsSync(dataFolder)) {
        boxen(texts.noData);
        process.exit();
    }
    await mergeDataFiles(destFolder, dataFolder);
    await copyScripts(destFolder);
    await generateStyles(destFolder);
    await generateWebFiles(destFolder);
};
