/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;

  let num = x;
  let reversed = 0;
  while (num > 0) {
    const digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
  }

  return x === reversed;
};
// @lc code=end
