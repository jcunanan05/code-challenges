const reverseString = require('../reverseString');

describe('reverseString function', () => {
  it('returns a string', () => {
    expect(typeof reverseString('any string')).toBe('string');
  });

  it('reverses single string', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('Howdy')).toBe('ydwoH');
  });

  it('reverses multi word strings', () => {
    expect(reverseString('Greetings from Earth')).toBe('htraE morf sgniteerG');
  });
});
