// Logical Operators
// what do you expect each line to print?
console.log(true && false); // false: because both expressions are not true
console.log(true || false); // true, bc one expression is true
console.log(!true); //false- I think this false was put here in error // false, the ! inverts the true expression
console.log(!(true && false)); //true bc true&&false is false and the ! inverts it
console.log(false || !false); //true bc !false is true and the or operator is used so one expression is true

// Logical Operators and Truthy/Falsy
// ? what do you expect each line to print?
console.log(undefined || null); // null because null is false
console.log(!``); // true bc empty string is false and ! inverts to true
console.log(!(1 && "false")); // false bc both in the parens are true and ! inverts to false
console.log(NaN || !"true"); // false bc NaN is false and ! true is false

// Set the age variable below equal to a number,
// then use conditional operators to construct an expression that returns...
// "full menu" if the age is over 10,
// and "kids menu" if the age is less than 10

let age = 34;

let menu = age > 10 ? "full menu" : "kids menu";
console.log(menu);

// Using only logical operators (no comparison operators),
// write an if statement that prints...
//  "The number is zero" when num is 0.

let num = 0;

// Write your if statement here *

// eslint-disable-next-line no-constant-condition
if (!num) {
  console.log("The number is zero");
}
