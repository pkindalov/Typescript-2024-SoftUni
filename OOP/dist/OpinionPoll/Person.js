"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    name = null;
    age = null;
    constructor(name, age) {
        this.setName(name);
        this.setAge(age);
    }
    setName(name) {
        if (!name)
            throw new Error("Invalid name");
        this.name = name;
    }
    setAge(age) {
        if (!age || typeof age !== "number")
            throw new Error("Invalid value.");
        this.age = age;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    showInfo() {
        console.log(`${this.name} is ${this.age} years old`);
    }
}
exports.Person = Person;
//# sourceMappingURL=Person.js.map