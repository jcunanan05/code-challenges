const convertToF = require('../temperature');

describe('convertToF', () => {
  it('returns a number', () => {
    expect(typeof convertToF(30) === 'number').toBe(true);
  });

  it('converts as expected', () => {
    expect(convertToF(0)).toBe(32);
    expect(convertToF(30)).toBe(86);
    expect(convertToF(-30)).toBe(-22);
    expect(convertToF(-10)).toBe(14);
    expect(convertToF(20)).toBe(68);
  });
});
