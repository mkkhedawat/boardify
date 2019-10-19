const generate = require('./generate');
const texts = require('../texts');
const boxen = require('../libs/boxen');

const { buildFolder, dataFolder } = require('../configs');

module.exports = async () => {
    boxen(texts.welcome);
    await generate(buildFolder, dataFolder);
    boxen(texts.buildSuccess);
};
