const copyDataTemplates = require('./tasks/copyDataTemplates');
const texts = require('../texts');
const boxen = require('../libs/boxen');

const { initFolder, dataFolder } = require('../configs');

module.exports = async () => {
    boxen(texts.welcome);
    await copyDataTemplates(initFolder, dataFolder);
    boxen(texts.initSuccess);
};
