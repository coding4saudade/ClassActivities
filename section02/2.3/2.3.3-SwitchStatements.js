// Correct these statements so they make sense
// Sunday = 0, Monday = 1, ... Saturday = 6
// re-assign day to any number from 0 - 7 to test the result
let day = 1;
let dayName = `Today`;

// Complete this switch case statement to produce the correct results please.

switch (day) {
  case 0: 
    dayName = `Sunday`;
    console.log(`Today is ${dayName}`)
    break;
  case 1:
    dayName = 'Monday';
    console.log(`Today is ${dayName}`)
    
    break;

  // Note the code blocks in the next 2 cases: Why?
  case 2: {
    const message = `Today is Tuesday`;
    console.log(message);
    break;
  }
  case 3: {
    const message = `Tomorrow it's the weekend!`;
    console.log(message);
    break;
  }
  default: {
    console.log("I need a vacation");
    break;
}
  case 4: {
  dayName = "Thursday"
    console.log(`Today is ${dayName}`);
    break;
  }
  // write a case here for the weekend (how many days in the weekend?)
  case 5:
    console.log(`It's the Weekend !!`);

}
if (dayName !== 'Today'){
console.log(dayName);
}