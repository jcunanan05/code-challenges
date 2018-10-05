const GRID = require("./GRID");

// Day 1
function countRows() {
  return GRID.length;
}

// Day 2
function countColumns() {
  return GRID[0].length;
}

// Day 3
function gridSize() {
  return `${countColumns()} x ${countRows()}`;
}

// Day 4
function totalCells() {
  return countColumns() * countRows();
}

// Day 5
function convertColumn(coordinates) {
  const columns = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  return columns.indexOf(coordinates[0]);
}
