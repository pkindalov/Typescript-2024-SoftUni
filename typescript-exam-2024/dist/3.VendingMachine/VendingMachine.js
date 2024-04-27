"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendingMachine = void 0;
class VendingMachine {
    drinks = [];
    buttonCapacity = 0;
    constructor(buttonCapacity) {
        this.buttonCapacity = buttonCapacity;
        this.drinks = [];
    }
    getCount() {
        return this.drinks.length;
    }
    report() {
        if (this.drinks.length <= 0) {
            console.log("There is no drinks in machine");
            return;
        }
        this.drinks.forEach((drink) => {
            console.log(`"Name: ${drink.getName()}, Price: $${drink.getPrice()}, Volume: ${drink.getVolume()} ml`);
        });
    }
    getLongest() {
        let max = Number.NEGATIVE_INFINITY;
        let maxDrink = null;
        this.drinks.forEach((drink) => {
            if (drink.getVolume() > max) {
                max = drink.getVolume();
                maxDrink = drink;
            }
        });
        if (maxDrink) {
            console.log(`"Name: ${maxDrink.getName()}, Price: $${maxDrink.getPrice()}, Volume: ${maxDrink.getVolume()} ml`);
        }
    }
    getCheapest() {
        let minPrice = Number.POSITIVE_INFINITY;
        let cheapestDrink = null;
        this.drinks.forEach((drink) => {
            if (drink.getPrice() < minPrice) {
                minPrice = drink.getPrice();
                cheapestDrink = drink;
            }
        });
        if (cheapestDrink) {
            console.log(`"Name: ${cheapestDrink.getName()}, Price: $${cheapestDrink.getPrice()}, Volume: ${cheapestDrink.getVolume()} ml`);
        }
    }
    addDrink(drink) {
        if (this.drinks.length < this.buttonCapacity) {
            this.drinks.push(drink);
            return true;
        }
        throw new Error("The capacity is full!");
    }
    removeDrink(name) {
        const drinkIndex = this.drinks.findIndex((drink) => drink.getName() === name);
        if (drinkIndex !== -1) {
            //copying the original drinks into separate variable
            const drinks = this.drinks.slice(0);
            drinks.splice(drinkIndex, 1);
            //update original drinks with the updated ones
            this.drinks = drinks;
            return true;
        }
        return false;
    }
    buyDrink(name) {
        let drink = this.drinks.find((drink) => drink.getName() === name);
        if (drink) {
            console.log(`"Name: ${drink.getName()}, Price: $${drink.getPrice()}, Volume: ${drink.getVolume()} ml`);
            return;
        }
        throw new Error("This drink is not found");
    }
}
exports.VendingMachine = VendingMachine;
//# sourceMappingURL=VendingMachine.js.map