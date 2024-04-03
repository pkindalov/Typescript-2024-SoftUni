import { AggregateUtils } from "./AggregateUtils";
const aggredateElements = (numbers: Array<number>) => {
  if (!numbers)
    throw new Error("Invalid data. Please provide me an array with numbers");
  const sumNumbers = AggregateUtils.sum(numbers);
  const sumInverse = AggregateUtils.sumInverse(numbers);
  const concatNumbers = AggregateUtils.concat(numbers);
  console.log(sumNumbers);
  console.log(sumInverse);
  console.log(concatNumbers);
};

try {
  aggredateElements([1, 2, 3]);
  aggredateElements([2, 4, 8, 16]);
} catch (error: unknown) {
  console.log(error);
}
