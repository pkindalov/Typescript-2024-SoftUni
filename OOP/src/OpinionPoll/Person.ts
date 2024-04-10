export class Person {
  private name: string | null = null;
  private age: number | null = null;

  constructor(name: string, age: number) {
    this.setName(name);
    this.setAge(age);
  }

  public setName(name: string): void {
    if (!name) throw new Error("Invalid name");
    this.name = name;
  }

  public setAge(age: number): void {
    if (!age || typeof age !== "number") throw new Error("Invalid value.");
    this.age = age;
  }

  public getName(): string | null {
    return this.name;
  }

  public getAge(): number | null {
    return this.age;
  }

  public showInfo(): void {
    console.log(`${this.name} is ${this.age} years old`);
  }
}
