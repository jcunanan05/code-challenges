const ROMAN_VALUES = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000
};

const ROMAN_NUMERALS = Object.keys(ROMAN_VALUES).reverse();

function romanNumeral(num) {
  let romanResult = "";
  let numCopy = (() => num)();
  // loop over roman numerals
  ROMAN_NUMERALS.forEach(romanNumeral => {
    // scan if number is greater than roman numeral
    while (numCopy >= getDecimal(romanNumeral)) {
      romanResult += romanNumeral;
      numCopy -= getDecimal(romanNumeral);
    }
  });
  return romanResult;
}

function getDecimal(romanNumeral) {
  return ROMAN_VALUES(romanNumeral);
}

module.exports = romanNumeral;
