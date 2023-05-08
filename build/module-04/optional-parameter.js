"use strict";
function multiply(x, y) {
    if (y === undefined) {
        return x;
    }
    else {
        return x * y;
    }
}
let multiplication = multiply(3, 5);
console.log(multiplication);
