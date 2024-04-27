namespace FoodAndBeverages {
  export interface Delivery {
    newCustomer(customerName: string, visited: boolean): string;
    visitCustomer(customerName: string): string;
    showCustomers(): string;
  }
  export interface Customer{
    customerName: string,
    visited: boolean
  }
}
