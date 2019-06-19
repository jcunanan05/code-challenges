/**
 * @param {string} str
 * @return {string}
 */
var removeOuterParentheses = function(str) {
  let result = "";
  for (let i = 0, counter = 0; i < str.length; i++) {
    if (str[i] === "(") {
      counter++;
    } else {
      counter--;
    }
    if (
      !(counter === 1 && str[i] === "(") &&
      !(counter === 0 && str[i] === ")")
    ) {
      result += str[i];
    }
  }
  return result;
};

/**
 * 
 * more info: https://leetcode.com/problems/remove-outermost-parentheses/
Input: "(()())(())"
Output: "()()()"
Explanation: 
The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
After removing outer parentheses of each part, this is "()()" + "()" = "()()()".
 */
