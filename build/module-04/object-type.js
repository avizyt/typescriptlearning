"use strict";
function greet_imp(person) {
    return "Hello " + person.name;
}
const p = {
    name: "Avijit",
    age: 30,
};
function greet(person) {
    return "Hello " + person.name;
}
// console.log(greet_imp(p));
console.log(greet(p));
