import { Person } from "./Person";

const opinionPoll = (input: string): void => {
  const personData: string[] = input.split(" ").map((str) => str.trim());
  const personName = personData[0];
  const personAge = +personData[1];
  const person = new Person(personName, personAge);
  person.showInfo();
};

try {
  opinionPoll("Peter 12");
  opinionPoll("Sofia 33");
} catch (error: unknown) {
  console.log(error);
}
