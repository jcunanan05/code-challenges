/*
Challenge 3
Okay, let's get our lighthouse actually doing some work! As the lighthouse keeper, sometimes you'll need to shine the light directly on a particular cell in the grid, to alert passing ships to a danger there.

Your job is to write a function called lightCell() that takes in the coordinates in the form of 'A3' or 'J9' and returns the contents of that specific cell. (Ex: lightCell('B4'); would return "")
*/

const GRID = [
  ["", "", "", "^", "", "", "", "", "", ""],
  ["", "", "", "", "~", "", "", "", "", ""],
  ["", "", "", "", "^", "^", "", "", "", ""],
  ["", "", "", "", "^", "^", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "^", "~", "~", "", "", "", "^", "", ""],
  ["", "^", "", "~", "~", "", "", "", "", ""],
  ["", "^", "", "", "~", "~", "", "", "", ""],
];


function gridSize() {
  return GRID[0].length + " x " + GRID.length;
}

function totalCells() {
  var result = 0;

  GRID.forEach(rows => {
    result += rows.length;
  });

  return result;
}


function lightCell(cell) {
  //subtract 65 from ascii code to get xCoordinate
  var x = cell.charCodeAt(0) - 65;
  var y = Number(cell[1]) - 1;
  console.log(`x: ${x}, charCode: ${cell.charCodeAt(0)} y: ${y}`);

  return `${GRID[y][x]}`;
}

console.log(lightCell('D1'));