import { Car } from "./Car";

const carInfo = (carRow: string): void => {
  const carData: string[] = carRow.split(" ").map((data) => data.trim());
  const brand: string | null = carData[0];
  const model: string | null = carData[1];
  const horsePower: number | null = +carData[2];
  const car = new Car(brand, model, horsePower);
  //FIRST WAY
  console.log(car.printCarData());

  //SECOND WAY
//   console.log(
//     `"The car is: ${car.getBrand()} ${car.getModel()} – ${car.getHorsePower()} HP.`
//   );
};

try {
  carInfo("Chevrolet Impala 390");
  carInfo("Skoda Karoq 150");
} catch (error: unknown) {
  console.error(error);
}
