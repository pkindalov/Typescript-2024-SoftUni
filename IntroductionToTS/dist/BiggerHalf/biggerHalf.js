"use strict";
const biggerHalf = (numbers) => {
    if (!numbers)
        throw new Error("Invalid input. Please provide and array with numbers");
    const sortedNumbers = numbers.sort((num1, num2) => num1 - num2);
    const sliceStart = Math.floor(sortedNumbers.length / 2);
    const sliceStop = sortedNumbers.length;
    return sortedNumbers.slice(sliceStart, sliceStop);
};
const init = () => {
    try {
        console.log(biggerHalf([4, 7, 2, 5]));
        console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));
    }
    catch (error) {
        console.log(error);
    }
};
init();
//# sourceMappingURL=biggerHalf.js.map