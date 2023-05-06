"use strict";
// Exercise 1
let firstName;
let lastName;
let fullName;
let age;
let ukCitizen;
firstName = "Rebecca";
lastName = "Smith";
age = 42;
ukCitizen = false;
fullName = firstName + " " + lastName;
if (ukCitizen) {
    console.log("My name is " +
        fullName +
        ", I'm " +
        age +
        ", and I'm a citizen of the United Kingdom.");
}
else {
    console.log("My name is " +
        fullName +
        ", I'm " +
        age +
        ", and I'm not a citizen of the United Kingdom.");
}
// Exercise 2
/* EXERCISE 2
   TODO: Run the code as is and then modify it to have strongly typed variables.
   Then, address any errors you find so that the result returned to a is 12. */
let x;
let y;
let a;
x = 5;
y = 7;
if (typeof x === "number" && typeof y === "number") {
    a = x + y;
}
else if (typeof x === "string" && typeof y === "number") {
    ("x must be a number:");
}
a = x + y;
console.log(a);
