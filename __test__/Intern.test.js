const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test ('return intern school name', () => {
    const intern = new Intern('Teller', '2', 'teller@gmail.com', 'university');

    expect(intern.school).toBe('university');
})

test ('role should be intern', () => {
    const intern = new Intern('Teller', '2', 'teller@gmail.com', 'teller35');

    expect(intern.roleInput()).toBe('Intern');
})