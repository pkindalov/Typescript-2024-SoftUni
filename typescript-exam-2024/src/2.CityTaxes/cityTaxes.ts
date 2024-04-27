type cityTaxes = {
  cityName: string;
  population: number;
  treasury: number;
  taxRate: number;
  collectTaxes: Function;
  applyGrowth: Function;
  applyRecession: Function;
};

function cityTaxes(cityName: string, population: number, treasury: number) {
  const cityTaxesObj: cityTaxes = {
    cityName,
    population,
    treasury,
    taxRate: 10,
    collectTaxes: function () {
      this.treasury = (population * this.taxRate) + treasury;  
      return this.treasury;
    },
    applyGrowth: function (percentage: number) {
      this.population =  population * (1 + percentage / 100);  
      return this.population;
    },
    applyRecession: function (percentage: number) {
      this.population = population * (1 - percentage / 100);
      return this.population;
    },
  };
  return cityTaxesObj;
}

function cityTaxesMain(): void {
  const city = cityTaxes("Tortuga", 7000, 15000);
  //   console.log(city);
  city.collectTaxes();
  console.log(city.treasury);
  city.applyGrowth(5);
  console.log(city.population);
}

cityTaxesMain();
