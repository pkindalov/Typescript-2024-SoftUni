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
        }
    });
    return products;
};
const printingProducts = (products) => {
    const productStrings = products.map((product) => `${product.name}: ${product.calories}`);
    const finalString = `{ ${productStrings.join(", ")} }`;
    console.log(finalString);
};
const calorieObjectFn = (data) => {
    if (!data)
        throw new Error("No data provided");
    const products = fillProducts(data);
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
}
catch (error) {
    console.error(error);
}
//# sourceMappingURL=calorieObject.js.map