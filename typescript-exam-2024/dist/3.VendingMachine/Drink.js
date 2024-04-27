"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Drink = void 0;
class Drink {
    name = null;
    price = 0;
    volume = 0;
    constructor(name, price, volume) {
        this.name = name;
        this.price = price;
        this.volume = volume;
    }
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
    getVolume() {
        return this.volume;
    }
    toString() {
        console.log(`"Name: ${this.name}, Price: $${this.price}, Volume: ${this.volume} ml`);
    }
}
exports.Drink = Drink;
//# sourceMappingURL=Drink.js.map