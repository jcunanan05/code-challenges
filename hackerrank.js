/* 
Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros. Print the decimal value of each fraction on a new line.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

Input Format

The first line contains an integer, , denoting the size of the array. 
The second line contains  space-separated integers describing an array of numbers .

Output Format

You must print the following  lines:

A decimal representing of the fraction of positive numbers in the array compared to its size.
A decimal representing of the fraction of negative numbers in the array compared to its size.
A decimal representing of the fraction of zeros in the array compared to its size.



*/



'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the plusMinus function below.
function plusMinus(arr) {
  let positiveCount = 0,
      negativeCount = 0,
      zeroCount = 0,
      arrLength = arr.length,
      resultArr = [];
  
  arr.forEach(num => {
    let sign = Math.sign(num);
    
    switch(sign) {
      case -1:
        negativeCount++;
        break;
      case 0:
        zeroCount++;
        break;
      case 1:
        positiveCount++;
        break;
    }
  });
  
  resultArr = [
    Number.parseFloat(positiveCount/arrLength).toFixed(6), 
    Number.parseFloat(negativeCount/arrLength).toFixed(6), 
    Number.parseFloat(zeroCount/arrLength).toFixed(6)
  ];
  
  console.log(resultArr.join('\n'));
  
  return resultArr.join('\n');
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
