"use strict";
const printTowns = (towns) => {
    towns.forEach((town) => {
        console.log(town);
    });
};
const processTowns = (data) => {
    const townsData = [];
    data.forEach((townRowStr) => {
        const data = townRowStr.split("|").map((str) => str.trim());
        const town = {
            town: data[0],
            latitude: +(parseFloat(data[1]).toFixed(2)),
            longitude: +(parseFloat(data[2]).toFixed(2)),
        };
        townsData.push(town);
    });
    printTowns(townsData);
};
try {
    processTowns([
        "Sofia | 42.696552 | 23.32601",
        "Beijing | 39.913818 | 116.363625",
    ]);
    processTowns(["Plovdiv | 136.45 | 812.575"]);
}
catch (error) {
    if (error instanceof Error)
        console.log(error?.message);
    console.error(error);
}
//# sourceMappingURL=towns.js.map