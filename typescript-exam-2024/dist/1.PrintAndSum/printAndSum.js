"use strict";
const calcNums = (num1, num2) => {
    let sum = 0;
    for (let i = num1; i <= num2; i++)
        sum += i;
    return sum;
};
const printSum = (sum) => {
    console.log(`Sum: ${sum}`);
};
const main = () => {
    printSum(calcNums(5, 10));
    printSum(calcNums(0, 26));
    printSum(calcNums(50, 60));
};
main();
//# sourceMappingURL=printAndSum.js.map