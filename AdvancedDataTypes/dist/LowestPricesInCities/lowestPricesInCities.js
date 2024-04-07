"use strict";
const printResult = (products) => {
    Object.keys(products).forEach((product) => {
        const productData = products[product];
        // console.log(productData);
        //Sample Product -> 1000 (Sample Town)
        console.log(`${product} -> ${productData.price} (${productData.town})`);
    });
};
const lowestPricesInCities = (rows) => {
    const products = {};
    rows.forEach((row) => {
        let [town, product, priceStr] = row.split("|").map((str) => str.trim());
        const priceInt = +priceStr; //convert to integer from string
        if (!products[product]) {
            products[product] = {
                town,
                price: priceInt,
            };
        }
        else {
            //   products[product]["price"] += +price;
            if (products[product]["price"] > priceInt)
                products[product]["price"] = priceInt;
        }
    });
    printResult(products);
    //   console.log(products);
};
try {
    lowestPricesInCities([
        "Sample Town | Sample Product | 1000",
        "Sample Town | Orange | 2",
        "Sample Town | Peach | 1",
        "Sofia | Orange | 3",
        "Sofia | Peach | 2",
        "New York | Sample Product | 1000.1",
        "New York | Burger | 10",
    ]);
}
catch (error) {
    console.error(error);
}
//# sourceMappingURL=lowestPricesInCities.js.map