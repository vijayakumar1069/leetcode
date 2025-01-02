/*
 * @lc app=leetcode id=231 lang=javascript
 *
 * [231] Power of Two
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n < 0) return false;
  if (n === 1) return true;

  if (n % 2 !== 0) return false;

  let middle = Math.floor(n / 2);
  for (let i = middle; i > 0; i--) {
    if (2 ** i === n) return true;
  }
  return false;
};
// @lc code=end
