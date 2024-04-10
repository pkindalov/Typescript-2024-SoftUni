"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Car_1 = require("./Car");
const carInfo = (carRow) => {
    const carData = carRow.split(" ").map((data) => data.trim());
    const brand = carData[0];
    const model = carData[1];
    const horsePower = +carData[2];
    const car = new Car_1.Car(brand, model, horsePower);
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
}
catch (error) {
    console.error(error);
}
//# sourceMappingURL=carInfo.js.map