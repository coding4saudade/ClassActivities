const arrOne = ["a", [0], "b"];
const arrTwo = [1, 2, "c", ["d", 3]];

// concatenate arrTwo, 4, and "e" to arrOne and save the resulting array to a variable
const merged = arrOne.concat(arrTwo, 4, "e")

const flat = merged.join(",")

const split = flat.split(",")
// print the new, merged array

// console.log(merged)

// // join the merged array and print the result
// console.log(ChannelMergerNode. join(","))

// console.log("split", split)




// const data = ["Jan", "Jna", "Feb", "Mar", "Apr", "banana", "orange", "grape", 1, 2, 3, 4, 5, "a", "b", "c", "d", "Oct", "Nov"];

// //remove 4 and 5

// data.splice(-8, 2)

// console.log(data)

//create a function that returns true if a string is a palindrome
// case insenstive
// helpful methods

// join
// toLowercase
// reverse (array)
// split

//if statement that checks string.  string

function isPalindrome(word) {

   let cleaned = word.toLowerCase()

   const reversed = cleaned.split("").reverse().join("")
   
   if (reversed === cleaned) {
    
     return true
   }

    return false
}   

console.log(isPalindrome("Colt"))

