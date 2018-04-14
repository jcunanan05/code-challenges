/*
Challenge 14
Ship captains are really starting to rely on you to plot their routes through your area. Your name is being sung in pubs and taverns up and down the coast. And this time, it's for the right reasons! The ship captains are starting to be curious about some of the cells in your grid, and what they want is to know if a cell is dangerous. They know if ones are safe, but sometimes, they are willing to accept a bit of danger so that they can get a faster delivery time.

A cell is considered dangerous if there is a rock or a strong current in it, OR in the cells immediately above, below, left, or right of it. Write a function called isDangerous() that will take a cell in the format 'G7' and return a true or a false value. (Example: isDangerous('E4') would return true, because there is a rock there. Similarly, isDangerous('B9') would return true, because there are rocks and currents AROUND the cell. However, isDangerous('I6') would return false because it is open water.)
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

  console.log(`cellValid: ${cellValid} x: ${x}, charCode: ${cell.charCodeAt(0)} y: ${y}`);

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

  // get letters
  var top = ! isSafe(`${cellX}${cellY - 1}`);
  var bottom = ! isSafe(`${cellX}${cellY + 1}`);
  var left = ! isSafe(`${String.fromCharCode(cellX.charCodeAt(0) - 1)}${cellY + 1}`);
  var right = ! isSafe(`${String.fromCharCode(cellX.charCodeAt(0) + 1)}${cellY + 1}`);

  return top || bottom || left || right;
}

console.log(isDangerous('A1'));