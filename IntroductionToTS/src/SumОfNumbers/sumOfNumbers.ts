const fillSeqNums = (startNum: number, endNum: number): Array<number> => {
  const numbers: Array<number> = [];
  for (let i: number = startNum; i <= endNum; i++) numbers.push(i);
  return numbers;
};

const sumOfNumbers = (num1: number, num2: number): number => {
  const numbersForCalc: Array<number> = fillSeqNums(num1, num2);
  return numbersForCalc.reduce(
    (acc: number, currentNum: number) => acc + currentNum,
    0
  );
};
console.log(sumOfNumbers(1, 5));
console.log(sumOfNumbers(-8, 20));
