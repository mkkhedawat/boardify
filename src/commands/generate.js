const mergeDataFiles = require('./tasks/mergeDataFiles');
const generateWebFiles = require('./tasks/generateWebFiles');
const generateStyles = require('./tasks/generateStyles');
const copyScripts = require('./tasks/copyScripts');

module.exports = async (destFolder, dataFolder) => {
    await mergeDataFiles(destFolder, dataFolder);
    await copyScripts(destFolder);
    await generateStyles(destFolder);
    await generateWebFiles(destFolder);
};
