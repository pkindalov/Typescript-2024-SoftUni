"use strict";
class Box {
    data;
    constructor(data) {
        this.data = data;
    }
    toString() {
        console.log(`"${this.data} is of type ${typeof this.data}`);
    }
}
const genericBoxOfStrong = (data) => {
    const box = new Box(data);
    box.toString();
};
genericBoxOfStrong(["test"]);
genericBoxOfStrong(20);
genericBoxOfStrong("Hello");
//# sourceMappingURL=genericBoxOfString.js.map