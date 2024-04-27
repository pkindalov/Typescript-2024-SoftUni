import { Drink } from "./Drink";
import {
  DrinkInformation,
  DrinkManagement,
  VendingReporting,
} from "./VendingMachineActions";

export class VendingMachine
  implements DrinkManagement, DrinkInformation, VendingReporting
{
  private drinks: Drink[] = [];
  private buttonCapacity: number = 0;

  constructor(buttonCapacity: number) {
    this.buttonCapacity = buttonCapacity;
    this.drinks = [];
  }
  getCount(): number {
    return this.drinks.length;
  }
  report(): void {
    if (this.drinks.length <= 0) {
      console.log("There is no drinks in machine");
      return;
    }
    this.drinks.forEach((drink: Drink) => {
      console.log(
        `"Name: ${drink.getName()}, Price: $${drink.getPrice()}, Volume: ${drink.getVolume()} ml`
      );
    });
  }
  getLongest(): void {
    let max: number = Number.NEGATIVE_INFINITY;
    let maxDrink: Drink | null = null;
    this.drinks.forEach((drink: Drink) => {
      if (drink.getVolume() > max) {
        max = drink.getVolume();
        maxDrink = drink;
      }
    });

    if (maxDrink) {
      console.log(
        `"Name: ${(maxDrink as Drink).getName()}, Price: $${(
          maxDrink as Drink
        ).getPrice()}, Volume: ${(maxDrink as Drink).getVolume()} ml`
      );
    }
  }
  getCheapest(): void {
    let minPrice = Number.POSITIVE_INFINITY;
    let cheapestDrink: Drink | null = null;
    this.drinks.forEach((drink: Drink) => {
      if (drink.getPrice() < minPrice) {
        minPrice = drink.getPrice();
        cheapestDrink = drink;
      }
    });

    if (cheapestDrink) {
      console.log(
        `"Name: ${(cheapestDrink as Drink).getName()}, Price: $${(
          cheapestDrink as Drink
        ).getPrice()}, Volume: ${(cheapestDrink as Drink).getVolume()} ml`
      );
    }
  }
  addDrink(drink: Drink): boolean {
    if (this.drinks.length < this.buttonCapacity) {
      this.drinks.push(drink);
      return true;
    }

    throw new Error("The capacity is full!");
  }
  removeDrink(name: string): boolean {
    const drinkIndex = this.drinks.findIndex(
      (drink) => drink.getName() === name
    );
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
  buyDrink(name: string): void {
    let drink: Drink | undefined = this.drinks.find(
      (drink: Drink) => drink.getName() === name
    );
    if (drink) {
      console.log(
        `"Name: ${drink.getName()}, Price: $${drink.getPrice()}, Volume: ${drink.getVolume()} ml`
      );
      return;
    }

    throw new Error("This drink is not found");
  }
}
