const statement = require('../refactored');
const invoices = require('../invoices');
const plays = require('../plays');

describe('Statement Function', () => {
  it('prints string', () => {
    expect(typeof statement(invoices[0], plays) === 'string').toBe(true);
  });
  it('prints the expected result in text', () => {
    const expectedResult = `Statement for BigCo
  Hamlet: $650.00 (55 seats)
  As You Like It: $580.00 (35 seats)
  Othello: $500.00 (40 seats)
Amount owed is $1,730.00
You earned 47 credits`;
    expect(statement(invoices[0], plays)).toMatch(expectedResult);
  });
});
