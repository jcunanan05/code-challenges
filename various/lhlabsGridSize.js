/*
Challenge 15
HELP! A ship is in trouble and is firing off a distress beacon, with their coordinates. You need to look at all the cells around the ship and decide which cell is the best one for them to go to.

Rules:

    Target cell should not be dangerous.
    Target cell should be 1 cell away in any direction.

Write a function called distressBeacon() that takes a coordinate in the format 'H2' and returns a different coordinate in the same format. (Example: distressBeacon('E8') should return 'F7'.)
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
  var y = Number(cell.substr(1)) - 1;
  var cellValid = true;

  //count cell length - 1 (index based), flag as false if cell invalid
  if (y < 0 || y > GRID.length - 1 || x < 0 || x > GRID[y].length - 1) {
    cellValid = false;
  }

  // console.log(`cellValid: ${cellValid} x: ${x}, charCode: ${cell.charCodeAt(0)} y: ${y}`);

  return cellValid ? `${GRID[y][x]}` : false;
}


function isRock(cell) {
  var cellContent = lightCell(cell);
  return cellContent ? cellContent === '^' : false;
}


function isCurrent(cell) {
  var cellContent = lightCell(cell);
  return cellContent ? cellContent === '~' : false;
}


function lightRow(row) {
  return GRID[row - 1];
}


function lightColumn(column) {
  //column is letter, convert to letter
  var x = column.charCodeAt(0) - 65;
  var result = [];
  
  //sort the grid
  result = GRID.map(row => {
    return row[x];
  })

  return result;
}


function isSafe(cell) {
  // return lightCell(cell) === '';
  return !(isCurrent(cell) || isRock(cell));
}


function allRocks() {
  //return all grid with rock
  var allCells = [];

  GRID.forEach((columns, columnIndex) => {
    columns.forEach((row, rowIndex) => {
      if(row === '^') {
        var rowLetter = String.fromCharCode((rowIndex + 65));
        allCells.push(`${rowLetter}${columnIndex + 1}`);
      }
    });

    var ewan = columns.findIndex((row) => {
      return row === '^';
    });

    console.log(ewan);
  });

  return allCells;
}


function allRocks2() {
  var cells = []; 
  //go through each row
  GRID.reduce((rockyCells, rows, columnIndex) => {
    rows.forEach((row, rowIndex) => {
      if(row === '^') {
        //convert to letter
        var rowLetter = String.fromCharCode((rowIndex + 65));
        //add to array as `A1`
        rockyCells.push(`${rowLetter}${columnIndex + 1}`);
      }
    });

    return rockyCells;
  }, cells);

  return cells;
}


function allCurrents() {
  var cells = []; 
  //go through each row
  GRID.reduce((currentsCells, rows, columnIndex) => {
    rows.forEach((row, rowIndex) => {
      if(row === '~') {
        //convert to letter
        var rowLetter = String.fromCharCode((rowIndex + 65));
        //add to array as `A1`
        currentsCells.push(`${rowLetter}${columnIndex + 1}`);
      }
    });

    return currentsCells;
  }, cells);

  return cells;
}


function firstRock() {
  return allRocks2()[0];
}


function firstCurrent() {
  return allCurrents()[0];
}


function isDangerous(cell) {
  // check if grid exist
  var cellX = cell[0];
  var cellY = Number(cell.substr(1));
  var dangers = allRocks2().join(allCurrents());
  var cells = [];
  var result = false;

  // get letters and check if safe
  for (var i = -1; i <= 1; i++) {
    var yOffset = `${cellX}${cellY + i}`;
    var xOffset = `${String.fromCharCode(cellX.charCodeAt(0) + i)}${cellY}`;

    if (xOffset !== cell && yOffset !== cell) {
      result = result || dangers.includes(xOffset) || dangers.includes(yOffset);
    }
  }

  return result;
}


function distressBeacon(cell) {

}

console.log(isDangerous('E8'));
