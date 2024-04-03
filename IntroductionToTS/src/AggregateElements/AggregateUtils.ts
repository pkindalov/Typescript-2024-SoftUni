export class AggregateUtils {
  static sum(numbers: Array<number>): number {
    if (!numbers)
      throw new Error("Invalid input. Please provide an array with numbers");
    return numbers.reduce((acc, currentNum) => acc + currentNum, 0);
  }

  static sumInverse(numbers: Array<number>): number {
    if (!numbers)
      throw new Error("Invalid input. Please provide an array with numbers");
    return numbers.reduce((acc, currentNum) => acc + 1 / currentNum, 0);
  }

  static concat(numbers: Array<number>): string {
    if (!numbers)
      throw new Error("Invalid input. Please provide an array with numbers");
    return numbers.reduce((acc, currentNum) => acc + currentNum.toString(), "");
    //second way
    // return numbers.reduce((acc, currentNum) => ("" + acc) + currentNum, "");
  }
}
