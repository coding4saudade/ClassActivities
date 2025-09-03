// Matt's excercise
//write a function that outputs your favorite drink
//must use a parameter



function myFavoriteDrink(drink){
    
    console.log("my favorite drink is " + drink)
    return drink
}


myFavoriteDrink("surge")





// Write a function that outputs your favorite pizza toppings and returns your favorite pizza brand
// Hint: use a rest parameter

function favoritePizzaToppings(brand, ...toppings){
    // topping1.toString() 
    // topping2.toString()
    
    console.log("My favorite brand is " + brand + " with toppings of "+ toppings)
    return brand

}



// Write a function that multipys two numbers... set the both numbers to default to 1.

function multiplyThese(number = 1, number2 = 1){
    let solution = number * number2
    console.log(solution)
}

// favoritePizzaToppings("Homemade","pepperoni", "sausage", "onion", "ham", "taco", "Burrito")
multiplyThese(5, 5)
multiplyThese()

let pizzaBrand = favoritePizzaToppings("Homemade","pepperoni", "sausage", "onion", "ham", "taco", "Burrito")


console.log("I love pizza from " + pizzaBrand )