"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AggregateUtils_1 = require("./AggregateUtils");
const aggredateElements = (numbers) => {
    if (!numbers)
        throw new Error("Invalid data. Please provide me an array with numbers");
    const sumNumbers = AggregateUtils_1.AggregateUtils.sum(numbers);
    const sumInverse = AggregateUtils_1.AggregateUtils.sumInverse(numbers);
    const concatNumbers = AggregateUtils_1.AggregateUtils.concat(numbers);
    console.log(sumNumbers);
    console.log(sumInverse);
    console.log(concatNumbers);
};
try {
    aggredateElements([1, 2, 3]);
    aggredateElements([2, 4, 8, 16]);
}
catch (error) {
    console.log(error);
}
//# sourceMappingURL=aggregateElements.js.map