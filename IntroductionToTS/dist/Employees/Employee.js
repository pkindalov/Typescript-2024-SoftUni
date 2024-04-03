"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
class Employee {
    name;
    personalNumber;
    constructor(name) {
        if (!name)
            throw new Error("The name of the employee is invalid");
        this.name = name;
        this.personalNumber = this.createPersonalNumber();
    }
    createPersonalNumber() {
        return this.name.length;
    }
    printData() {
        console.log(`Name: ${this.name} -- Personal Number: ${this.personalNumber}`);
    }
}
exports.Employee = Employee;
//# sourceMappingURL=Employee.js.map