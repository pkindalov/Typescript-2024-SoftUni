"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    name = null;
    age = null;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduction() {
        return `"My name is ${this.name} and I am ${this.age} years old."`;
    }
    sayGoodbye(name) {
        return `Dear ${name}, it was a pleasure meeting you!`;
    }
}
exports.Person = Person;
//# sourceMappingURL=Person.js.map