"use strict";
const h = {
    resident: {
        name: "Avijit",
        age: 30,
    },
};
function visitForBirthday(home) {
    console.log(`Happy birthday ${home.resident.name}`);
    home.resident.age++;
}
console.log(visitForBirthday(h));
