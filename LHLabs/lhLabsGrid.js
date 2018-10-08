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
  const columns = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return columns.indexOf(coordinates[0]);
}

// Day 6
function lightCell(coordinates) {
  const row = Number(coordinates.slice(1) - 1);
  const column = convertColumn(coordinates);
  return GRID[row][column];
}

// Day 7
// make HOF for content checking
function isA(thing, coordinates) {
  try {
    return lightCell(coordinates) === thing;
  } catch (_) {
    return false;
  }
}

function isRock(coordinates) {
  return isA("^", coordinates);
}

// Day 8
function isCurrent(coordinates) {
  return isA("~", coordinates);
}
