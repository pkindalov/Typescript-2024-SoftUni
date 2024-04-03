"use strict";
const showEvenPositionEls = (numsStrArr) => {
    const filteredNums = numsStrArr.filter((num, index) => {
        if (index % 2 === 0)
            return num;
    });
    return filteredNums.join(" ");
};
console.log(showEvenPositionEls(["20", "30", "40", "50", "60"]));
console.log(showEvenPositionEls(["5", "10"]));
//# sourceMappingURL=evenPositionElement.js.map