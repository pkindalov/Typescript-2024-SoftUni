export class Cat {
  private name: string;
  private age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  meow(): void {
    console.log(`${this.name}, age ${this.age} says Meow`);
  }
}
