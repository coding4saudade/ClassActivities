const nums = [6, 5, 2, 3, 4, 1, 0];

// remove each of the last two items with pop(), saving each item to a variable
const numsPop1 = nums.pop()
const numsPop2 = nums.pop()
// remove each of the first two items with shift(), saving each item to a variable
const numShift1 = nums.shift()
const numShift2 = nums.shift()
// use push and unshift to add the variables back to the array in numerical order, 0-6
// const numPush05 = nums.push(5)
// const numUnshift06 = nums.unshift(6)
nums.unshift(numsPop1, numsPop2)
nums.push(numShift1, numShift2)


console.log(nums)