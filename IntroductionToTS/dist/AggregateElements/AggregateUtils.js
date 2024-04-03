"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateUtils = void 0;
class AggregateUtils {
    static sum(numbers) {
        if (!numbers)
            throw new Error("Invalid input. Please provide an array with numbers");
        return numbers.reduce((acc, currentNum) => acc + currentNum, 0);
    }
    static sumInverse(numbers) {
        if (!numbers)
            throw new Error("Invalid input. Please provide an array with numbers");
        return numbers.reduce((acc, currentNum) => acc + 1 / currentNum, 0);
    }
    static concat(numbers) {
        if (!numbers)
            throw new Error("Invalid input. Please provide an array with numbers");
        return numbers.reduce((acc, currentNum) => acc + currentNum.toString(), "");
        //second way
        // return numbers.reduce((acc, currentNum) => ("" + acc) + currentNum, "");
    }
}
exports.AggregateUtils = AggregateUtils;
//# sourceMappingURL=AggregateUtils.js.map