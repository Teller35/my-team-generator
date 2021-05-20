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
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <link rel="stylesheet" href="../dist/style.css">
    </head>
    <body>
    <header class="col-12 col-lg-12 bg-danger text-center text-light p-lg-3">
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
        <section class="card" style="width: 18rem;">
        <div class="card-body">
        <h3 class="card-title">${employee.name}</h3>
        <h4 class="card-subtitle nb text-muted">Manager</h4>
        <div class="card-text">Id Number: ${employee.id}</div>
        <div class="card-text">Email:<a href='mailto:${employee.email}'>${employee.email}</a></div>
        <div class="card-text">Office Number: ${employee.offNumber}</div>
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
    <section class="card" style="width: 18rem;">
    <div class="card-body">
    <h3 class="card-title">${employee.name}</h3>
    <h4 class="card-subtitle nb text-muted">Engineer</h4>
    <div class="card-text">Id Number: ${employee.id}</div>
    <div class="card-text">Email: <a href='mailto:${employee.email}'>${employee.email}</a></div>
    <div class="card-text"><a href='https://github.com/${employee.github}' target='_blank'>GitHub</a></div>
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
        <section class="card" style="width: 18rem;">
        <div class="card-body">
        <h3 class="card-title">${employee.name}</h3>
        <h4 class="card-subtitle nb text-muted">Intern</h4>
        <div class="card-text">Id Number: ${employee.id}</div>
        <div class="card-text">Email:<a href='mailto:${employee.email}'>${employee.email}</a></div>
        <div class="card-text">School: ${employee.school}</div>
        </div>
        </section>
        `
    }
    teamFinal.push(intSection);
}

module.exports = generateHTML;