const index = require('../index');
// const bootstrap = require('bootstrap');

let teamFinal = [];

function generateHTML(arr) {
    arr.forEach((employee) => {
        switch (employee.roleInput()) {
            case 'Manager':
                managerLayout(employee);
                break;
            case 'Engineer':
                engineerLayout(employee);
                break;
            default:
                internLayout(employee);
        }
    })
    return htmlLayout();
}

function htmlLayout() {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Members</title>
    <link rel="stylesheet" href="../dist/style.css">
    </head>
    <body>
    <header>
        <h1>Team Members</h1>
    </header>
    <main>
        ${teamFinal.join('')}
    </main>
</body>
</html>
    `
}

function managerLayout(employee) {
    let manSection = '';
    if (employee !== '') {
        manSection = `
        <section>
        <div>
        <h3>${employee.name}</h3>
        <h4>Manager</h4>
        </div>
        <div>
        <div>Id Number: ${employee.id}</div>
        <div>Email:<a href='mailto:${employee.email}'>${employee.email}</a></div>
        <div>Office Number: ${employee.offNumber}</div>
        </div>
        </section>
        `
    }
    teamFinal.push(manSection);
}

function engineerLayout(employee) {
    let engSection = '';
    if (employee !== '') {
        engSection = `
        <section>
        <div>
        <h3>${employee.name}</h3>
        <h4>Engineer</h4>
        </div>
        <div>
        <div>Id Number: ${employee.id}</div>
        <div>Email: <a href='mailto:${employee.email}'>${employee.email}</a></div>
        <div><a href='https://github.com/${employee.github}' target='_blank'>GitHub</a></div>
        </div>
        </section>
        `
    }
    teamFinal.push(engSection);
}

function internLayout(employee) {
    let intSection = '';
    if (employee !== '') {
        intSection = `
        <section>
        <div>
        <h3>${employee.name}</h3>
        <h4>Intern</h4>
        </div>
        <div>
        <div>Id Number: ${employee.id}</div>
        <div>Email:<a href='mailto:${employee.email}'>${employee.email}</a></div>
        <div>School: ${employee.school}</div>
        </div>
        </section>
        `
    }
    teamFinal.push(intSection);
}

module.exports = generateHTML;