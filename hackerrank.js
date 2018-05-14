//print absolute value difference of diagonals in the matrix

function diagonalDifference(a) {
  let firstDiagonal = a.reduce((prev, current, i) => {
    return prev + current[i];
  }, 0);

  let secondDiagonal = a.reduce((prev, current, i) => {
    return prev + current.reverse()[i];
  }, 0);

  return Math.abs(firstDiagonal - secondDiagonal);
}

//must be equal to 0

let a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(diagonalDifference(a));