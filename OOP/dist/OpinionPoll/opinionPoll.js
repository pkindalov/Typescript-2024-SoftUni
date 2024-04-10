"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = require("./Person");
const opinionPoll = (input) => {
    const personData = input.split(" ").map((str) => str.trim());
    const personName = personData[0];
    const personAge = +personData[1];
    const person = new Person_1.Person(personName, personAge);
    person.showInfo();
};
try {
    opinionPoll("Peter 12");
    opinionPoll("Sofia 33");
}
catch (error) {
    console.log(error);
}
//# sourceMappingURL=opinionPoll.js.map