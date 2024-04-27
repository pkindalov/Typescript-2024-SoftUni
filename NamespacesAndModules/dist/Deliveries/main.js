"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Courier_1 = require("./Courier");
try {
    let courier = new Courier_1.Courier([{ customerName: "DHL", visited: false }]);
    console.log(courier.newCustomer("Speedy"));
    console.log(courier.newCustomer("MTM"));
    console.log(courier.newCustomer("TipTop"));
    courier.visitCustomer("DHL");
    courier.visitCustomer("MTM");
    courier.visitCustomer("MTM");
    console.log(courier.showCustomers());
}
catch (error) {
    console.error(error);
}
//# sourceMappingURL=main.js.map