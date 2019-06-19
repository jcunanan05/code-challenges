/**
 * @param {number} N
 * @return {number}
 */
var fib = (n) => {
  if (n < 0) return 0;
  if (n === 1) return 1;
  return fib(n - 1) + fib(n - 2)
};

/**
 * more info: https://leetcode.com/problems/fibonacci-number/
Input: 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
 */