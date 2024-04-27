import { Courier } from "./Courier";

try {
  let courier = new Courier([{ customerName: "DHL", visited: false }]);
  console.log(courier.newCustomer("Speedy"));
  console.log(courier.newCustomer("MTM"));
  console.log(courier.newCustomer("TipTop"));
  courier.visitCustomer("DHL");
  courier.visitCustomer("MTM");
  courier.visitCustomer("MTM");
  console.log(courier.showCustomers());
} catch (error: unknown) {
  console.error(error);
}
