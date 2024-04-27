export class Courier implements FoodAndBeverages.Delivery {
  protected placesToVisit: Array<FoodAndBeverages.Customer> = [];

  constructor(customers: Array<FoodAndBeverages.Customer>) {
    this.placesToVisit = customers;
  }

  newCustomer(customerName: string, visited: boolean = false): string {
    const customer = this.placesToVisit.find(
      (customer: FoodAndBeverages.Customer) =>
        customer.customerName === customerName
    );
    if (customer) {
      throw new Error(`${customerName} is already a customer of yours!`);
    }

    const newCustomer: FoodAndBeverages.Customer = {
      customerName: customerName,
      visited: false,
    };
    this.placesToVisit.push(newCustomer);
    return `${customerName} just became your client.`;
  }
  visitCustomer(customerName: string): string {
    const customer = this.placesToVisit.find(
      (customer: FoodAndBeverages.Customer) =>
        customer.customerName === customerName
    );
    if (!customer) {
      throw new Error(`${customerName} is not your customer`);
    }

    customer.visited = true;
    return "Visited";
  }
  showCustomers(): string {
    return this.placesToVisit
      .map(
        (customer: FoodAndBeverages.Customer) =>
          `${customer.customerName} -> ${customer.visited}`
      )
      .join("\n");

    // this.placesToVisit.forEach((customer: FoodAndBeverages.Customer) => {
    //   console.log(`${customer.customerName} -> ${customer.visited}`);
    // });
  }
}
