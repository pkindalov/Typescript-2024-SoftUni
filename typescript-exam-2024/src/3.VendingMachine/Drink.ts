export class Drink {
  private name: string | null = null;
  private price: number = 0;
  private volume: number = 0;

  constructor(name: string, price: number, volume: number) {
    this.name = name;
    this.price = price;
    this.volume = volume;
  }

  getName(): string | null {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }

  getVolume(): number {
    return this.volume;
  }

  toString(): void {
    console.log(
      `"Name: ${this.name}, Price: $${this.price}, Volume: ${this.volume} ml`
    );
  }
}
