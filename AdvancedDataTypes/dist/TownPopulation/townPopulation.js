"use strict";
const processTownPopulation = (towns) => {
    const townPopulationResult = {};
    towns.forEach((townStr) => {
        const [town, populationStr] = townStr.split("<->").map((str) => str.trim());
        const population = +populationStr; //convert the value to integer from string
        if (!townPopulationResult.hasOwnProperty(town)) {
            townPopulationResult[town] = population;
        }
        else {
            townPopulationResult[town] += population;
        }
    });
    console.log(townPopulationResult);
};
try {
    processTownPopulation([
        "Sofia <-> 1200000",
        "Montana <-> 20000",
        "New York <-> 10000000",
        "Washington <-> 2345000",
        "Las Vegas <-> 1000000",
    ]);
    processTownPopulation([
        "Istanbul <-> 100000",
        "Honk Kong <-> 2100004",
        "Jerusalem <-> 2352344",
        "Mexico City <-> 23401925",
        "Istanbul <-> 1000",
    ]);
}
catch (error) {
    console.error(error);
}
//Second way using type with Record
// interface ProcessTownPopulationFn {
//   (data: string[]): void;
// }
// type TownsPopulation = Record<string, number>;
// const processTownPopulation: ProcessTownPopulationFn = (towns: string[]) => {
//   const townPopulationResult: TownsPopulation = {};
//   towns.forEach((townStr: string) => {
//     const [town, populationStr] = townStr.split("<->").map((str) => str.trim());
//     const population = +populationStr; //convert the value to integer from string
//     if (!townPopulationResult.hasOwnProperty(town)) {
//       townPopulationResult[town] = population;
//     } else {
//       townPopulationResult[town] += population;
//     }
//   });
//   console.log(townPopulationResult);
// };
// try {
//   processTownPopulation([
//     "Sofia <-> 1200000",
//     "Montana <-> 20000",
//     "New York <-> 10000000",
//     "Washington <-> 2345000",
//     "Las Vegas <-> 1000000",
//   ]);
//   processTownPopulation([
//     "Istanbul <-> 100000",
//     "Honk Kong <-> 2100004",
//     "Jerusalem <-> 2352344",
//     "Mexico City <-> 23401925",
//     "Istanbul <-> 1000",
//   ]);
// } catch (error: unknown) {
//   console.error(error);
// }
//# sourceMappingURL=townPopulation.js.map