//WITH TYPES

// type Person = {
//   firstName: string;
//   lastName: string;
//   age: number;
// };

// const personInfo = (firstName: string, lastName: string, age: string) => {
//   const user: Person = {
//     firstName,
//     lastName,
//     age: +age,
//   };
//   console.log(user);
// };

// try {
//   personInfo("Peter", "Pan", "20");
//   personInfo("George", "Smith", "18");
// } catch (error: unknown) {
//   console.error(error);
// }

//----------------------------------------------------------------------------------

//WITH INTERFACES

interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

interface PersonInfoFn {
  (firstName: string, lastName: string, age: string): void;
}

const personInfo: PersonInfoFn = (
  firstName: string,
  lastName: string,
  age: string
) => {
  const user: Person = {
    firstName,
    lastName,
    age: +age,
  };
  console.log(user);
};

try {
  personInfo("Peter", "Pan", "20");
  personInfo("George", "Smith", "18");
} catch (error: unknown) {
  console.error(error);
}
