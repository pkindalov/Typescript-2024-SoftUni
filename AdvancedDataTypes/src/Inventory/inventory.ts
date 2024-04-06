interface Hero {
  name: string;
  level: number;
  items: string[];
}

interface inputData {
  (data: string[]): void;
}

interface addHeroesFn {
  (data: string[]): Hero[];
}

interface printHeroesFn {
  (data: Hero[]): void;
}

const addHeroes: addHeroesFn = (data) => {
  const heroes: Hero[] = [];
  data.forEach((heroStr: string) => {
    const heroData: string[] = heroStr.split("/");
    const hero: Hero = {
      name: heroData[0].trim(),
      level: +heroData[1],
      items: heroData[2].split(",").map((item) => item.trim()),
    };
    heroes.push(hero);
  });
  return heroes;
};

const printHeroes: printHeroesFn = (data) => {
  data.forEach((hero: Hero) => {
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items.join(", ")}`);
  });
};

const inventory: inputData = (data) => {
  const heroes: Hero[] = addHeroes(data);
  heroes.sort((hero1: Hero, hero2: Hero) => hero1.level - hero2.level);
  printHeroes(heroes);
};

try {
  inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara",
  ]);
  inventory([
    "Batman / 2 / Banana, Gun",
    "Superman / 18 / Sword",
    "Poppy / 28 / Sentinel, Antara",
  ]);
} catch (error: unknown) {
  console.log(error);
}
