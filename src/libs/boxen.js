const boxen = require('boxen');
const config = require('../configs/boxen');

const { log } = console;

module.exports = args => log(boxen(args, config));
