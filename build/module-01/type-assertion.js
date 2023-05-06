"use strict";
let randVal = 10;
randVal = true;
// randVal = "mateo";
if (typeof randVal === "string") {
    console.log(randVal.toUpperCase());
}
else {
    console.log("Error - A string was expected!");
}
