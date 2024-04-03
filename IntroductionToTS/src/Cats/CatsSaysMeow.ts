import { Cat } from "./Cat";

const catSayMeow = (catsData: Array<string>): void => {
  if (!catsData)
    throw new Error(
      "Invalid input. I expect array with cat's name and age strings"
    );
  if (catsData.length === 0)
    throw new Error(
      "Cannot work with an empty array. Please add at least one cat's name and age"
    );
  catsData.forEach((catData) => {
    const [catName, catAge] = catData?.split(" ");
    const cat: Cat = new Cat(catName, +catAge); //+catAge -> parse age to integer from string
    cat.meow();
  });
};

try {
  catSayMeow(["Mellow 2", "Tom 5"]);
  catSayMeow(['Candy 1', 'Poppy 3', 'Nyx 2']);
} catch (error: unknown) {
  console.log(error);
}
