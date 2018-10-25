const GRID = require('./GRID');

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
  const columns = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return columns.indexOf(coordinates[0].toUpperCase());
}

function convertRow(coordinates) {
  return Number(coordinates.slice(1) - 1);
}

// Day 6
function lightCell(coordinates) {
  const row = Number(coordinates.slice(1) - 1);
  const column = convertColumn(coordinates);
  if (GRID[row] === undefined) return false;
  if (GRID[row][column] === undefined) return false;
  return GRID[row][column];
}

// Day 7
function isA(thing, coordinates) {
  return lightCell(coordinates) === thing;
}

function isRock(coordinates) {
  return isA('^', coordinates);
}

// Day 8
function isCurrent(coordinates) {
  return isA('~', coordinates);
}

// Day 9
function isShip(coordinates) {
  return isA('v', coordinates);
}

// Day 10
function lightRow(row) {
  return GRID[row - 1];
}

// Day 11
function lightColumn(column) {
  return GRID.map(row => row[convertColumn(column)]);
}

// Day 13
function getAll(thing) {
  return GRID.reduce((store, row, rowIndex) => {
    row.forEach((column, columnIndex) => {
      let columnLetter = convertColumnIndex(columnIndex);
      if (column === thing) store.push(`${columnLetter}${rowIndex + 1}`);
    });
    return store;
  }, []);
}

function convertColumnIndex(i) {
  const columns = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return columns[i];
}

function allRocks() {
  return getAll('^');
}

function allCurrents() {
  return getAll('~');
}

function allShips() {
  return getAll('v');
}

function firstRock() {
  return allRocks()[0];
}

function firstCurrent() {
  return allCurrents()[0];
}

function shipReport() {
  return [allShips()[0]].concat(allShips().slice(allShips().length - 1));
}

function howDangerous(coordinates) {
  const dangerPercentage = {
    current: 50,
    rock: 100,
    ship: 100
  };

  if (isCurrent(coordinates)) return dangerPercentage.current;
  if (isRock(coordinates)) return dangerPercentage.rock;

  return 0;
}

// Day 19
function percentageReport() {
  const percentages = {
    currents: () => (allCurrents().length / totalCells()) * 100,
    rocks: () => (allRocks().length / totalCells()) * 100
  };

  const { rocks, currents } = percentages;
  return [rocks().toFixed(2), currents().toFixed(2)];
}

// Day 20
function safetyReport() {
  let gridCopy = [];

  GRID.forEach((row, rowIndex) => {
    gridCopy.push(
      row.map((_, columnIndex) =>
        howDangerous(`${convertColumnIndex(columnIndex)}${rowIndex + 1}`)
      )
    );
  });

  return gridCopy;
}

// Day 21
function calcDistance(pointA, pointB) {
  const pointASquared = Math.pow(
    convertRow(pointA) - (convertColumn(pointA) + 1),
    2
  );
  const pointBSquared = Math.pow(
    convertRow(pointB) - (convertColumn(pointB) + 1),
    2
  );

  return Math.sqrt(pointASquared + pointBSquared).toFixed(2);
}
