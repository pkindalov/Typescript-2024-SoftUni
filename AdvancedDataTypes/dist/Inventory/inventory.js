"use strict";
const addHeroes = (data) => {
    const heroes = [];
    data.forEach((heroStr) => {
        const heroData = heroStr.split("/");
        const hero = {
            name: heroData[0].trim(),
            level: +heroData[1],
            items: heroData[2].split(",").map((item) => item.trim()),
        };
        heroes.push(hero);
    });
    return heroes;
};
const printHeroes = (data) => {
    data.forEach((hero) => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(", ")}`);
    });
};
const inventory = (data) => {
    const heroes = addHeroes(data);
    heroes.sort((hero1, hero2) => hero1.level - hero2.level);
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
}
catch (error) {
    console.log(error);
}
//# sourceMappingURL=inventory.js.map