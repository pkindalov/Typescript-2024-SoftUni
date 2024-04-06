"use strict";
//WITH TYPES
const personInfo = (firstName, lastName, age) => {
    const user = {
        firstName,
        lastName,
        age: +age,
    };
    console.log(user);
};
try {
    personInfo("Peter", "Pan", "20");
    personInfo("George", "Smith", "18");
}
catch (error) {
    console.error(error);
}
//# sourceMappingURL=personInfo.js.map