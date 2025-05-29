// create an Array using an Array literal
const testArray = [2, 4 , 6 , 8, 10];
// access the 1st item in the Array
console.log(testArray[0])
// access the last item in the Array
console.log(testArray[4]);
// print the length of the Array
console.log(testArray.length);
// use the length property to access the last item in the Array
console.log(testArray[testArray.length - 1]);

// with for...of, loop over the Array, modify the value and add to a different Array
const secondArray = [];
let index = 0
for (let number of testArray){
    secondArray[index] = number + 1
    index++
    console.log(secondArray)
}