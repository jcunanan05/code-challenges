const factorial = require('../factorial');

describe('factorial function', () => {
  it('returns a number', () => {
    expect(typeof factorial(5)).toBe('number');
  });
  it('correct values', () => {
    expect(factorial(5)).toBe(120);
    expect(factorial(10)).toBe(3628800);
    expect(factorial(20)).toBe(2432902008176640000);
  });
  it('returns 1 on invalid values', () => {
    expect(factorial(0)).toBe(1);
  });
});
