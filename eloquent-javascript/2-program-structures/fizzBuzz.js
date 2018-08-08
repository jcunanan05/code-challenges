let maxSize = 100;

for(let i = 1; i < maxSize + 1; i++) {
  console.log(fizzBuzz(i));
}

function fizzBuzz(num) {
  let output = "";

  //build the string 
  if (num % 3 == 0) output += "Fizz"; 
  if (num % 5 == 0) output += "Buzz";

  // return number if output is empty string
  return output || num;
}