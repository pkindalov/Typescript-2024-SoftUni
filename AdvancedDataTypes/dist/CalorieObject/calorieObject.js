"use strict";
const fillProducts = (data) => {
    let products = [];
    data.forEach((rec, index) => {
        // console.log('index: ' + index);
        if (index % 2 === 0) {
            const calorieObj = {
                name: data[index],
                calories: +data[index + 1],
            };
            products.push(calorieObj);
            //   console.log(`{${calorieObj.name} }`);
        }
    });
    return products;
};
const printingProducts = (products) => {
    let finalString = "{ ";
    products.forEach((product, index) => {
        if (index < products.length - 1) {
            finalString += `${product.name}: ${product.calories}, `;
        }
        else {
            finalString += `${product.name}: ${product.calories}`;
        }
        // console.log(`{ Yoghurt: 48, Rise: 138, Apple: 52 }`);
    });
    finalString += " }";
    console.log(finalString);
};
const calorieObjectFn = (data) => {
    if (!data)
        throw new Error("No data provided");
    const products = fillProducts(data);
    printingProducts(products);
    // console.log(products);
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
}
catch (error) {
    console.error(error);
}
//# sourceMappingURL=calorieObject.js.map