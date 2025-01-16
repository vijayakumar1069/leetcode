/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const isNagative = x < 0;
  x = Math.abs(x);
  let reversed = 0;
  while (x > 0) {
    const lastDigit = x % 10;
    reversed = reversed * 10 + lastDigit;
    x = Math.floor(x / 10);
    // Check for 32-bit integer overflow
    if (reversed > 0x7fffffff) {
      return 0;
    }
  }
  return isNagative ? -reversed : reversed;
};
// @lc code=end
