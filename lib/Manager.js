const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, offNumber) {
        super(name, id, email);
        this.offNumber = offNumber;
    }

    roleInput() {
        return 'Manager';
    }
}


module.exports = Manager;