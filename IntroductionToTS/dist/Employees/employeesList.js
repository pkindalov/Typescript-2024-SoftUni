"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Employee_1 = require("./Employee");
const employeesList = (empNames) => {
    if (!empNames)
        throw new Error("Invalid employees data. Expect to provide and arrray with properly employees names.Try again");
    if (empNames.length === 0)
        throw new Error("The employees list is empty. Please provide an array with employees names!");
    empNames.forEach((name) => {
        const employee = new Employee_1.Employee(name);
        employee.printData();
    });
};
try {
    employeesList([
        "Silas Butler",
        "Adnaan Buckley",
        "Juan Peterson",
        "Brendan Villarreal",
    ]);
    employeesList([
        "Samuel Jackson",
        "Will Smith",
        "Bruce Willis",
        "Tom Holland",
    ]);
}
catch (error) {
    console.log(error);
}
//# sourceMappingURL=employeesList.js.map