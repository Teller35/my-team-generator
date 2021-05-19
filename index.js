const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');
const team = [];


function makeManager () {
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
    .then (() => {
        add();
    })
}

async function add () {
    let { employee } = await
    inquirer.prompt([
        {
            type: 'list',
            name: 'employee',
            message: 'What type of employee would you like to add to team?',
            choices: ['Engineer', 'Intern', 'None']
        }
    ])
    switch (employee) {
        case 'Engineer':
            makeEngineer();
            break;
        case 'Intern':
            makeIntern();
            break;
        default:
            console.log(team);
            // makeTeam(team);
    }
}

function makeEngineer () {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engName',
            message: 'Please enter engineer name!',
            validate: engNameInput => {
                if (engNameInput) {
                    return true;
                }
                else {
                    console.log('Please enter a name!');
                }
            }
        },
        {
            type: 'input',
            name: 'engId',
            message: 'Please enter engineer ID number!',
            validate: engIdInput => {
                if (engIdInput) {
                    return true;
                }
                else {
                    console.log('Please enter an ID number!');
                }
            }
        },
        {
            type: 'input',
            name: 'engEmail',
            message: 'Please enter engineer email address!',
            validate: engEmailInput => {
                if (engEmailInput) {
                    return true;
                }
                else {
                    console.log('Need an email address!');
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter a GitHub user name for engineer!',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                }
                else {
                    console.log('Need a user name!');
                }
            }
        }
    ])
    .then (() => {
        add();
    })
}

function makeIntern () {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'intName',
            message: 'Please enter intern name!',
            validate: intNameInput => {
                if (intNameInput) {
                    return true;
                }
                else {
                    console.log('Please enter a name!');
                }
            }
        },
        {
            type: 'input',
            name: 'intId',
            message: 'Please enter intern ID number!',
            validate: intIdInput => {
                if (intIdInput) {
                    return true;
                }
                else {
                    console.log('Please enter an ID number!');
                }
            }
        },
        {
            type: 'input',
            name: 'intEmail',
            message: 'Please enter intern email address!',
            validate: intEmailInput => {
                if (intEmailInput) {
                    return true;
                }
                else {
                    console.log('Need an email address!');
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Please enter a school name for intern!',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                }
                else {
                    console.log('Need a school name!');
                }
            }
        }
    ])
    .then (() => {
        add();
    })
}


makeManager();