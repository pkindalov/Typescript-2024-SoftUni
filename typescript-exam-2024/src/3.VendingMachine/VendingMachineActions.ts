import { Drink } from "./Drink";

export interface DrinkManagement {
  addDrink(drink: Drink): boolean;
  removeDrink(name: string): boolean;
  buyDrink(name: string): void;
}

export interface DrinkInformation {
  getLongest(): void;
  getCheapest(): void;
}

export interface VendingReporting {
  getCount(): number;
  report(): void;
}
