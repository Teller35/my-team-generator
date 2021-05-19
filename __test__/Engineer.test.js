const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test ('return github user name', () => {
    const engineer = new Engineer('Teller', '2', 'teller@gmail.com', 'teller35');

    expect(engineer.github).toBe('teller35');
})

test ('role should be engineer', () => {
    const engineer = new Engineer('Teller', '2', 'teller@gmail.com', 'teller35');

    expect(engineer.roleInput()).toBe('Engineer');
})