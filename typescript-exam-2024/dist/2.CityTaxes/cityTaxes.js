"use strict";
function cityTaxes(cityName, population, treasury) {
    const cityTaxesObj = {
        cityName,
        population,
        treasury,
        taxRate: 10,
        collectTaxes: function () {
            this.treasury = (population * this.taxRate) + treasury;
            return this.treasury;
        },
        applyGrowth: function (percentage) {
            this.population = population * (1 + percentage / 100);
            return this.population;
        },
        applyRecession: function (percentage) {
            this.population = population * (1 - percentage / 100);
            return this.population;
        },
    };
    return cityTaxesObj;
}
function cityTaxesMain() {
    const city = cityTaxes("Tortuga", 7000, 15000);
    //   console.log(city);
    city.collectTaxes();
    console.log(city.treasury);
    city.applyGrowth(5);
    console.log(city.population);
}
cityTaxesMain();
//# sourceMappingURL=cityTaxes.js.map