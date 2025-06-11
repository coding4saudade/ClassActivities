//declare a function

 function randomNumber() {
    //Math.random gives a number from 0 to 1 in decimals
    //Math.floor removes the decimals
    // multiple it by 11 to get 1-10
     const num = Math.floor(Math.random() * 11);
     //if the random number is greater than five it will run this code
    if (num => 5) {
        console.log( `${num} is greater than five!`)

    } else {
        console.log( `${num} is less than five!`)

    }
    //return random
 }

randomNumber()



