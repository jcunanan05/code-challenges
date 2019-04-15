const numJewelIsInStones = require('../jewel-stones');

describe('jewel and stones', () => {
  it('returns somthing', () => {
    expect(numJewelIsInStones('aA', 'aAAbbbb'));
  });
  it('returns 3', () => {
    expect(numJewelIsInStones('aA', 'aAAbbbb')).toBe(3);
  });
});
