/*
You are given two arrays and an index.

Use the array methods slice and splice to copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.

*/

/* 
  Main point is insert the arr1 elements in the n index of the arr2
*/
function frankenSplice(arr1, arr2, n) {
  //make copy of arr2
  const answer = arr2.slice();

  //use splice insert the answer
  //insert 1 by 1
  arr1.forEach(elem => {
    answer.splice(n, 0, elem);
    n += 1;
  });

  //return
  return answer;
}

const answer = frankenSplice([1, 2, 3], [4, 5, 6], 1);

console.log(answer);