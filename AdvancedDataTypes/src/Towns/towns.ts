interface Town {
  town: string;
  latitude: number;
  longitude: number;
}

interface ProcessTownsFn {
  (data: string[]): void;
}

interface PrintTownsFn {
  (data: Town[]): void;
}

const printTowns: PrintTownsFn = (towns: Town[]) => {
  towns.forEach((town: Town) => {
    console.log(town);
  });
};

const processTowns: ProcessTownsFn = (data: string[]) => {
  const townsData: Town[] = [];
  data.forEach((townRowStr: string) => {
    const data = townRowStr.split("|").map((str: string) => str.trim());
    const town: Town = {
      town: data[0],
      latitude: +parseFloat(data[1]).toFixed(2),
      longitude: +parseFloat(data[2]).toFixed(2),
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
} catch (error: unknown | object) {
  if (error instanceof Error) console.log(error?.message);
  console.error(error);
}
