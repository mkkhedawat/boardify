const cli = require('commander');
const { version } = require('../package.json');
const commands = require('./commands');

cli.version(version, '-v, --version', 'output current version')
    .option('-i, --init', 'init boardify project', commands.init)
    .option('-b, --build', 'build static files', commands.build)
    .option('-r, --run', 'build and run server locally', commands.run)
    .allowUnknownOption(false)
    .parse(process.argv);

process.argv.length > 2 || cli.outputHelp();
