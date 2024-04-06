type CalorieObj = {
  name: string;
  calories: number;
};

const fillProducts = (data: string[]): CalorieObj[] => {
  let products: CalorieObj[] = [];

  data.forEach((rec, index) => {
    // console.log('index: ' + index);
    if (index % 2 === 0) {
      const calorieObj: CalorieObj = {
        name: data[index],
        calories: +data[index + 1],
      };

      products.push(calorieObj);
      //   console.log(`{${calorieObj.name} }`);
    }
  });

  return products;
};

const printingProducts = (products: CalorieObj[]): void => {
  let finalString: string | null = "{ ";
  products.forEach((product: CalorieObj, index: number) => {
    if (index < products.length - 1) {
      finalString += `${product.name}: ${product.calories}, `;
    } else {
      finalString += `${product.name}: ${product.calories}`;
    }
  });
  finalString += " }";
  console.log(finalString);
};

const calorieObjectFn = (data: string[]): void => {
  if (!data) throw new Error("No data provided");
  const products: CalorieObj[] = fillProducts(data);
  printingProducts(products);
};

try {
  calorieObjectFn(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
  calorieObjectFn([
    "Potato",
    "93",
    "Skyr",
    "63",
    "Cucumber",
    "18",
    "Milk",
    "42",
  ]);
} catch (error: unknown) {
  console.error(error);
}
