//Lets do it! Rawr!


// dylan console.log(typeof 42);

// let day = "Saturday";

// if (day === "Saturday" || day === "Sunday") {
//   console.log("Weekend!");
// } else {
//   console.log("Weekday");
// }

// Me  let day = "Monday";
// switch(day){
//     case 
//     "Saturday":
//     case 
//     "Sunday":
//     console.log("Weekend");
//     break
    
//     default:
//     console.log("Weekday");
//     break;
// }

// const user = "Charlie";
// const day = "Friday";

// console.log(`Hello ${user}, today is ${day}`);
// let score = 87;
// if (score >= 100) {
//   console.log("Hi Five");
// } else {
//   console.log("Keep trying");
// }
// logs evens numbers two to 10
// let x = 2
// while (x <= 10){
//   //   if (x%2 === 0) {
//   //   }
//   console.log(x);
//   x += 2;
// }
// for (initialization; condition; update) {
//     // code to run in each loop iteration
// }
// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }

// Write a for loop that prints the numbers from 1 to 100.
for (let i = 1; i <= 100; i++) {

// But for multiples of 3, print "Fizz" instead of the number,
  if ((i % 3 === 0) && !(i % 5 === 0)){
    console.log("Fizz");
  }
// for multiples of 5, print "Buzz", and
  if ((i % 5 === 0) && !(i % 3 === 0)){
    console.log("Buzz");
}


// for numbers which are multiples of both 3 and 5, print "FizzBuzz"

  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (!(i % 3 === 0) && !(i % 5 === 0)) {
    console.log(i);
 }
}