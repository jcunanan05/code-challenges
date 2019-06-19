/**
 * @param {string[]} words
 * @return {number}
 */
const MORSE_CODE = [
  ".-",
  "-...",
  "-.-.",
  "-..",
  ".",
  "..-.",
  "--.",
  "....",
  "..",
  ".---",
  "-.-",
  ".-..",
  "--",
  "-.",
  "---",
  ".--.",
  "--.-",
  ".-.",
  "...",
  "-",
  "..-",
  "...-",
  ".--",
  "-..-",
  "-.--",
  "--.."
];

var uniqueMorseRepresentations = words => {
  const morseCodeList = words.map(word => {
    let result = "";
    for (let n of word) {
      result += toMorseCode(n);
    }
    return result;
  });
  return new Set([...morseCodeList]).size;
};

const toAlphabetNumber = char => {
  const OFFSET = 97;
  return char.charCodeAt() - OFFSET;
};

const toMorseCode = char => {
  return MORSE_CODE[toAlphabetNumber(char)];
};

/**
 * more info: https://leetcode.com/problems/unique-morse-code-words/
Example:
Input: words = ["gin", "zen", "gig", "msg"]
Output: 2
Explanation: 
The transformation of each word is:
"gin" -> "--...-."
"zen" -> "--...-."
"gig" -> "--...--."
"msg" -> "--...--."

There are 2 different transformations, "--...-." and "--...--.".
 */
