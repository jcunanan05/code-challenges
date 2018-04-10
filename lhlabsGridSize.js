/*
Challenge 10
Environment Canada has called and wants a report sent to them of all the rocks in your grid, for use in their latest map.

Write a function called allRocks() which when called will return an array of the coordinates of all the rocks in your grid. (Example: allRocks() should return ["D1", "E3", "F3", "E4", "F4", "B8", "H8", "B9", "B10"])
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
  if (y > GRID.length - 1 || x > GRID[y].length - 1) {
    cellValid = false;
  }

  console.log(`cellValid: ${cellValid} x: ${x}, charCode: ${cell.charCodeAt(0)} y: ${y}`);

  return cellValid ? `${GRID[y][x]}` : false;
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
  var cells = GRID.reduce((rockyCells, rows, columnIndex) => {
    //go through each row
    rows.forEach((row, rowIndex) => {
      if(row === '^') {
        //convert to letter
        var rowLetter = String.fromCharCode((rowIndex + 65));
        //add to 
        rockyCells.push(`${rowLetter}${columnIndex + 1}`);
      }
    });

    return rockyCells;
  }, []);

  return cells;
}


console.log(allRocks2());