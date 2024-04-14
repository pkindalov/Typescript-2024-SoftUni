"use strict";
class CompareElements {
    data;
    counter = 0;
    constructor(data) {
        this.data = data;
    }
    compare(el) {
        this.data.forEach((element) => {
            if (el === element)
                this.counter++;
        });
        return this.counter;
    }
}
const genericCompareElements = (data, lookFor) => {
    const c = new CompareElements(data);
    console.log(c.compare(lookFor));
};
genericCompareElements(["a", "b", "ab", "abc", "cba", "b"], "b");
genericCompareElements([1, 2, 3, 4, 5, 1, 1], 1);
//# sourceMappingURL=genericCompareElements.js.map