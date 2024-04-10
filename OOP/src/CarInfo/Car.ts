export class Car {
  public brand: string | null;
  public model: string | null;
  public horsePower: number | null;

  public constructor(
    brand: string | null = null,
    model: string | null = null,
    horsePower: number | null = null
  ) {
    this.setBrand(brand);
    this.brand = brand;
    this.model = model;
    this.horsePower = horsePower;
  }

  public setBrand(brand: string | null) {
    if (!brand) throw new Error("Invalid brand");
    this.brand = brand;
  }

  public setModel(model: string | null) {
    if (!model) throw new Error("Invalid model");
    this.model = model;
  }

  public setHorsePower(horsePower: number | null) {
    if (horsePower === null || horsePower === undefined)
      throw new Error("Horse power must be a number");
    this.horsePower = horsePower;
  }

  public getModel(): string | null {
    return this.model;
  }

  public getBrand(): string | null {
    return this.brand;
  }

  public getHorsePower(): number | null {
    return this.horsePower;
  }

  public printCarData(): string | null {
    return `"The car is: ${this.brand} ${this.model} – ${this.horsePower} HP.`;
  }
}

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
