const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test ('create employee object', () => {
    const employee = new Employee('Teller', '2', 'teller@gmail.com');

    expect(employee.name).toBe('Teller');
    expect(employee.id).toBe('2');
    expect(employee.email).toBe('teller@gmail.com');
})

test ('gets employee name', () => {
    const employee = new Employee('Teller', '2', 'teller@gmail.com');

    expect(employee.nameInput()).toEqual(expect.stringContaining(employee.name));
})

test ('gets employee id', () => {
    const employee = new Employee('Teller', '2', 'teller@gmail.com');

    expect(employee.idInput()).toEqual(expect.stringContaining(employee.id));
})

test ('gets employee email', () => {
    const employee = new Employee('Teller', '2', 'teller@gmail.com');

    expect(employee.emailInput()).toEqual(expect.stringContaining(employee.email));
})

test ('gets description of role', () => {
    const employee = new Employee('Teller', '2', 'teller@gmail.com');

    expect(employee.roleInput()).toBe('Employee')
})