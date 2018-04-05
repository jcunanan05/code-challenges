/*
Challenge 6
Your next job is to write a loop so that your lighthouse can sweep a whole row of cells.

To do this, write a function named lightRow() that takes in the number of the row and returns the contents of the cell. (Example: lightRow(2); would return ["", "", "", "", "~", "", "", "", "", ""])
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


function isRock(cell) {
  return lightCell(cell) === '^';
}


function isCurrent(cell) {
  return lightCell(cell) === '~';
}


function lightRow(row) {
  return GRID[row - 1];
}


console.log(lightRow(2));