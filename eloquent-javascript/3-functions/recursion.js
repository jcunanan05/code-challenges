/**
 We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

    Zero is even.

    One is odd.

    For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
 */

 // Your code here.

function isEven(num) {
  var positiveNum = Math.abs(num);
  //figure out if number is 0 or 1
  //if it's greater, subtract 2 until it become 1 or 0
  if(positiveNum === 0) return true;
  else if(positiveNum === 1) return false;
  else if (positiveNum > 1) return isEven(positiveNum - 2);
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false