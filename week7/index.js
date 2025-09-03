// create an open array
let array1 = [100 , -2, 3, 5, 10]


//create function
function highestNumber(array){
// create for loop that interates through array
let highest = array[0] 

for (let i = 1; i <array.length; i++) {
    
    //as loop goes through array it checks each array index against the highest number it has read
    if (array[i] > highest) {
        highest = array[i];
    }


}
//outputs the highest number outside of function
return highest

}
//runs function, prints number
console.log(highestNumber(array1))

//feedback use a for in loop for cleaner code