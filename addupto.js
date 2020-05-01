/* Write a function that takes the last number of a consecutive list of numbers 
and returns the total of all numbers up to and including it. */

function addUpTo(n) {
  return (1 + n) * n / 2;
}

//testing our function by calling it 

console.log(addUpTo(3)) // --> 6
console.log(addUpTo(10)) // --> 55
console.log(addUpTo(7)) // --> 28
console.log(addUpTo(30000)) // --> 450015000