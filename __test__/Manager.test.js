const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test ('return manager office number', () => {
    const manager = new Manager('Teller', '2', 'teller@gmail.com', '3050');

    expect(manager.offNumber).toBe('3050');
})

test ('role should be manager', () => {
    const manager = new Manager('Teller', '2', 'teller@gmail.com', '3050');

    expect(manager.roleInput()).toBe('Manager');
})