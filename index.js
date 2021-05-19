const { inheritInnerComments, validate } = require('@babel/types');
const inquirer = require('inquirer');

function init () {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'manName',
            message: 'Please enter manager name!',
            validate: manNameInput => {
                if (manNameInput) {
                    return true;
                }
                else {
                    console.log('Please enter a name!');
                }
            }
        },
        {
            type: 'input',
            name: 'manId',
            message: 'Please enter manager ID number!',
            validate: manIdInput => {
                if (manIdInput) {
                    return true;
                }
                else {
                    console.log('Please enter an ID number!');
                }
            }
        },
        {
            type: 'input',
            name: 'manEmail',
            message: 'Please enter manager email address!',
            validate: manEmailInput => {
                if (manEmailInput) {
                    return true;
                }
                else {
                    console.log('Need an email address!');
                }
            }
        },
        {
            type: 'input',
            name: 'offNumber',
            message: 'Please enter an office number for manager!',
            validate: offNumberInput => {
                if (offNumberInput) {
                    return true;
                }
                else {
                    console.log('Need an office number!');
                }
            }
        }
    ])
}

init();