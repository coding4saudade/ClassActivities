// create five variables and assign them values
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable
let string = "String";
let boolean = true;
let number = 1;
let Lol = null;
let sun;

// print the type of each variable in this order:
// string, number, boolean, undefined, null

console.log(typeof string);
console.log(typeof boolean);
console.log(typeof number);
console.log(typeof Lol);
console.log(typeof sun);
// create a variable that references a template literal
// inside the template literal, use two of the above variables

let joy = `I am full of ${Lol}, it will take ${number} day to be ok`;
console.log(joy);
// reassign the value of the variable that references "null"
Lol = 42;
// print the value and its type
console.log(Lol);
console.log(typeof Lol);
// print a variable that causes a ReferenceError
let happy = "HaPPy, loooooool";

console.log(happy);
// alter the previous line to no longer cause a ReferenceError
// moved the happy variable up to fix the reference error: let happy = "HaPPy, loooooool";
