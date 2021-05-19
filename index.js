const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateHTML');
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
    .then ((data) => {
        const manager = new Manager(data.manName, data.manId, data.manEmail, data.offNumber);
        team.push(manager);
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
            // console.log(team);
            makeTeam(team);
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
    .then ((data) => {
        const engineer = new Engineer(data.engName, data.engId, data.engEmail, data.github);
        team.push(engineer);
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
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                }
                else {
                    console.log('Need a school name!');
                }
            }
        }
    ])
    .then ((data) => {
        const intern = new Intern(data.intName, data.intId, data.intEmail, data.school);
        team.push(intern);
        add();
    })
}

function createFile(filename, data) {
    fs.writeFile(path.join(__dirname, 'dist', filename), data, err => {
        console.log(err);
    })
}

function makeTeam(response) {
    createFile('team.html', generateHTML(response));
    console.log('Team has been created check out team.html file!');
}

makeManager();