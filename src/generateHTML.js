const index = require('../index');

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
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
    </head>
    <body>
    <header class="col-12 col-lg-12 bg-danger text-center text-light p-lg-3">
        <h1>Team Members</h1>
    </header>
    <main class="row row-cols-1 row-cols-md-3 g-4">
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
        <section class="col">
        <div class="card text-center border border-5 border-primary rounded">
        <div class="card-body bg-success">
        <h3 class="card-title fs-1"><i class="bi bi-person-circle"></i>${employee.name}</h3>
        <h4 class="card-subtitle fs-3"><i class="bi bi-cup-fill"></i>Manager</h4>
        <div class="card-text bg-info fs-4">Id Number: <i class="bi bi-hash"></i>${employee.id}</div>
        <div class="card-text bg-info fs-4"><i class="bi bi-envelope-fill"></i>Email:<a class="text-decoration-none link-dark" href='mailto:${employee.email}'>${employee.name}</a></div>
        <div class="card-text bg-info fs-4">Office Number: <i class="bi bi-hash"></i>${employee.offNumber}</div>
        </div>
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
        <section class="col">
        <div class="card text-center border border-5 border-primary rounded">
        <div class="card-body bg-success">
        <h3 class="card-title fs-1"><i class="bi bi-person-circle"></i>${employee.name}</h3>
        <h4 class="card-subtitle fs-3"><i class="bi bi-cpu-fill"></i>Engineer</h4>
        <div class="card-text bg-info fs-4">Id Number: <i class="bi bi-hash"></i>${employee.id}</div>
        <div class="card-text bg-info fs-4"><i class="bi bi-envelope-fill"></i>Email: <a class="text-decoration-none link-dark" href='mailto:${employee.email}'>${employee.name}</a></div>
        <div class="card-text bg-info fs-4"><a class="text-decoration-none link-dark" href='https://github.com/${employee.github}' target='_blank'><i class="bi bi-github"></i>GitHub</a></div>
        </div>
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
        <section class="col">
        <div class="card text-center border border-5 border-primary rounded">
        <div class="card-body bg-success">
        <h3 class="card-title fs-1"><i class="bi bi-person-circle"></i>${employee.name}</h3>
        <h4 class="card-subtitle fs-3"><i class="bi bi-terminal-fill"></i>Intern</h4>
        <div class="card-text bg-info fs-4">Id Number: <i class="bi bi-hash"></i>${employee.id}</div>
        <div class="card-text bg-info fs-4"><i class="bi bi-envelope-fill"></i>Email:<a class="text-decoration-none link-dark" href='mailto:${employee.email}'>${employee.name}</a></div>
        <div class="card-text bg-info fs-4"><i class="bi bi-book-fill"></i>School: ${employee.school}</div>
        </div>
        </div>
        </section>
        `
    }
    teamFinal.push(intSection);
}

module.exports = generateHTML;