class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    nameInput() {
        return this.name;
    }

    idInput() {
        return this.id;
    }

    emailInput() {
        return this.email;
    }
}

module.exports = Employee;