// create a constant variable called "name" that references a string
const name = "Amanzi";
// create a reassignable variable called "favoriteSong" that references a string
let favoriteSong = "Omaha Style by 311";

// create a reassignable variable called "wage" that references a number
let wage = 100000000000000;
// create a variable called "age" that references a number, should it be reassignable?
let age = 43; //Yes it should
// create a variable called "onlyChild" that references a boolean
let onlyChild = false;
// create a variable called "satisfied" that references a boolean
let satisfied = false;
// print the types of two variables that reference two different data types (typeof)
console.log(typeof satisfied);
console.log(typeof favoriteSong);
// create a variable called "favoriteThing" that references ANY primitive value
// print the data type of "favoriteThing"
let favoriteThing = 42;
console.log(typeof favoriteThing);
// You heard a new song that became your favorite.
// Reassign the variable "favoriteSong"
favoriteSong = "Tunnels by Arcade Fire";
// You no longer like the type of data stored in "favoriteThing"
// Reassign "favoriteThing" to a different primitive data type and print its type
favoriteThing = "42";
// Happy Birthday!
// Reassign "age" to a new value
age = 1043;
// You got a big raise at work.
// Reassign "wage" to a new value
wage = 1000000000000000000000;
// Your raise changed your job satisfaction.
// Assign "satisfied" to true
satisfied = true;
// use "console.log()" and "+" to print a sentence that includes two of the above variables
console.log(
  "I am " +
    age +
    "years old and it is " +
    satisfied +
    "that I am satisfied about work"
);
