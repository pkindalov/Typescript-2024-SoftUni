const calcNums = (num1: number, num2: number): number => {
  let sum = 0;
  for (let i: number = num1; i <= num2; i++) sum += i;
  return sum;
};

const printSum = (sum: number): void => {
  console.log(`Sum: ${sum}`);
};

const main = (): void => {
  printSum(calcNums(5, 10));
  printSum(calcNums(0, 26));
  printSum(calcNums(50, 60));
};

main();
