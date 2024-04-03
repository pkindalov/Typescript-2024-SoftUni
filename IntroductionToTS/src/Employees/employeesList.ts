import { Employee } from "./Employee";

const employeesList = (empNames: Array<string>): void => {
  if (!empNames)
    throw new Error(
      "Invalid employees data. Expect to provide and arrray with properly employees names.Try again"
    );
  if (empNames.length === 0)
    throw new Error(
      "The employees list is empty. Please provide an array with employees names!"
    );
  empNames.forEach((name) => {
    const employee = new Employee(name);
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
} catch (error: unknown) {
  console.log(error);
}
