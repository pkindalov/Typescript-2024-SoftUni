"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Courier = void 0;
class Courier {
    placesToVisit = [];
    constructor(customers) {
        this.placesToVisit = customers;
    }
    newCustomer(customerName, visited = false) {
        const customer = this.placesToVisit.find((customer) => customer.customerName === customerName);
        if (customer) {
            throw new Error(`${customerName} is already a customer of yours!`);
        }
        const newCustomer = {
            customerName: customerName,
            visited: false,
        };
        this.placesToVisit.push(newCustomer);
        return `${customerName} just became your client.`;
    }
    visitCustomer(customerName) {
        const customer = this.placesToVisit.find((customer) => customer.customerName === customerName);
        if (!customer) {
            throw new Error(`${customerName} is not your customer`);
        }
        customer.visited = true;
        return "Visited";
    }
    showCustomers() {
        return this.placesToVisit
            .map((customer) => `${customer.customerName} -> ${customer.visited}`)
            .join("\n");
        // this.placesToVisit.forEach((customer: FoodAndBeverages.Customer) => {
        //   console.log(`${customer.customerName} -> ${customer.visited}`);
        // });
    }
}
exports.Courier = Courier;
//# sourceMappingURL=Courier.js.map