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

  // get letters and check if safe
  var top = ! isSafe(`${cellX}${cellY - 1}`);
  var bottom = ! isSafe(`${cellX}${cellY + 1}`);
  var left = ! isSafe(`${String.fromCharCode(cellX.charCodeAt(0) - 1)}${cellY}`);
  var right = ! isSafe(`${String.fromCharCode(cellX.charCodeAt(0) + 1)}${cellY}`);

  // console.log(`cell: ${cell} top: ${cellX}${cellY - 1} bottom: ${cellX}${cellY + 1}  left: ${String.fromCharCode(cellX.charCodeAt(0) - 1)}${cellY + 1}  right: ${String.fromCharCode(cellX.charCodeAt(0) + 1)}${cellY + 1} dangerous?: ${top || bottom || left || right}`);

  return top || bottom || left || right;
}


function distressBeacon(cell) {
  //break cell to x y
  var cellX = cell.charCodeAt(0);
  var cellY = Number(cell.substr(1));
  var safeCells = [];

  // var x = A - 1 ; A - 1 <= A + 1 ; x++ increment x from 
  for (var x = cellX - 1; x <= cellX + 1; x++) {
    for (var y = cellY - 1; y <= cellY + 1; y++) {
      var targetCell = `${String.fromCharCode(x)}${y}`; //Letter format
      //elimnate the original cell from safeCells
      // console.log(`cell:${targetCell} valid: ${typeof lightCell(targetCell) === 'string' ? true : false}`);
      if(targetCell !== cell && !isDangerous(targetCell) && typeof lightCell(targetCell) === 'string') {
        console.log(`cell:${targetCell} safe: ${!isDangerous(targetCell)}`);
        safeCells.push(targetCell);
      }
    }
  }

  return safeCells.length === 0 ? '' : safeCells.length > 1 ? safeCells : safeCells[0];
}


console.log(distressBeacon('E8'));