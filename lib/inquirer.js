const inquirer = require('inquirer');
/**
 * Function prompt the user for their credentials
 * We are using inquirer npm package
 */
module.exports = {
    askCredentials: () => {
        const questions = [
            {
                name: 'Email',
                type: 'input',
                message: 'Enter email address',
                validate: function (value) {
                    if (value.length) {
                        return true;
                    } else {
                        return 'Please enter a valid email'
                    }
                }
            },
            {
                name: 'Password',
                type: 'password',
                message: 'Enter your password',
                validate: function (value) {
                    if (value.length) {
                        return true;
                    } else {
                        return 'Please enter a valid password'
                    }
                }
            }
        ];
        return inquirer.prompt(questions);
    },
};