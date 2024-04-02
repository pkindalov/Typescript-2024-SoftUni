"use strict";
const fillSeqNums = (startNum, endNum) => {
    const numbers = [];
    for (let i = startNum; i <= endNum; i++)
        numbers.push(i);
    return numbers;
};
const sumOfNumbers = (num1, num2) => {
    const numbersForCalc = fillSeqNums(num1, num2);
    return numbersForCalc.reduce((acc, currentNum) => acc + currentNum, 0);
};
console.log(sumOfNumbers(1, 5));
console.log(sumOfNumbers(-8, 20));
//# sourceMappingURL=sumOfNumbers.js.map