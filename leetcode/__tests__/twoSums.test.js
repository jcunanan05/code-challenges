const twoSums = require('../twoSums');

describe('twoSums', () => {
  it('returns an array', () => {
    const isArray = Array.isArray(twoSums([2, 7, 11, 15], 9));
    expect(isArray).toBe(true);
  });

  it('array [2, 7, 11, 15], 9) contains [0,1]', () => {
    expect(twoSums([2, 7, 11, 15], 9)).toEqual(expect.arrayContaining([0, 1]));
  });

  it('[2, 7, 11, 15], 9) returns [0,1]', () => {
    expect(twoSums([2, 7, 11, 15], 9)).toBe([0, 1]);
  });
});
