"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Car {
    brand;
    model;
    horsePower;
    constructor(brand = null, model = null, horsePower = null) {
        this.setBrand(brand);
        this.brand = brand;
        this.model = model;
        this.horsePower = horsePower;
    }
    setBrand(brand) {
        if (!brand)
            throw new Error("Invalid brand");
        this.brand = brand;
    }
    setModel(model) {
        if (!model)
            throw new Error("Invalid model");
        this.model = model;
    }
    setHorsePower(horsePower) {
        if (horsePower === null || horsePower === undefined)
            throw new Error("Horse power must be a number");
        this.horsePower = horsePower;
    }
    getModel() {
        return this.model;
    }
    getBrand() {
        return this.brand;
    }
    getHorsePower() {
        return this.horsePower;
    }
    printCarData() {
        return `"The car is: ${this.brand} ${this.model} – ${this.horsePower} HP.`;
    }
}
exports.Car = Car;
// export class Car {
//   public brand: string = "";
//   public constructor(brand = null, model = null, horsePower = null) {
//     this.setBrand(brand);
//   }
//   public set setBrand(brand: string) {
//     if (!brand) throw new Error("Invalid brand");
//     this.brand = brand;
//   }
//   public get getBrand(): string {
//     return this.brand;
//   }
// }
//# sourceMappingURL=Car.js.map