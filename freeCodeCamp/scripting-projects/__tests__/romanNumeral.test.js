const convertToRoman = require("../romanNumeral");

describe("romanNumeral Function", () => {
  it('convertToRoman(2) should return "II".', () => {
    expect(convertToRoman(2)).toBe("II");
  });

  it('convertToRoman(3) should return "III".', () => {
    expect(convertToRoman(3)).toBe("III");
  });

  it('convertToRoman(4) will be "IV"', () => {
    expect(convertToRoman(4)).toBe("IV");
  });

  it("convertToRoman(5) will be V", () => {
    expect(convertToRoman(5)).toBe("V");
  });
});
