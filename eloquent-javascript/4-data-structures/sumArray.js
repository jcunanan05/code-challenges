/**
 The sum of a range

  The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:

  console.log(sum(range(1, 10)));

  Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

  Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

  As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
 */

function range(num1, num2, step = 1) {
  //determine which is the greater number and the lesser number
  const result = [];
  const start = num1 < num2 ? num1 : num2;
  const end = !(num1 < num2) ? num1 : num2;
  const loopStep = Math.abs(step);

  for(let counter = start; 
    counter <= end; 
    counter += loopStep) {
    if(num1 < num2) result.push(counter);
    else if(num1 > num2) result.unshift(counter);
  }

  return result;
}

function sum(range) {
  return range.reduce((current, next) => {
    return current + next;
  }, 0);
}

console.log(range(10, 1));

console.log(range(5, 2, -1));

console.log(sum(range(1, 10)));