export class Employee {
  private name: string;
  private personalNumber: number;
  constructor(name: string) {
    if (!name) throw new Error("The name of the employee is invalid");
    this.name = name;
    this.personalNumber = this.createPersonalNumber();
  }

  private createPersonalNumber(): number {
    return this.name.length;
  }

  public printData(): void {
    console.log(
      `Name: ${this.name} -- Personal Number: ${this.personalNumber}`
    );
  }
}
