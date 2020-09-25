const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const inquirer = require('./lib/inquirer');

clear();

console.log(chalk.yellow(figlet.textSync('Parallel', { horizontalLayout: 'full' })));

const run = async () => {
    const credentails = await inquirer.askCredentials();
    console.log(credentails);
};

run();