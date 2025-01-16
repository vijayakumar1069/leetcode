/*
 * @lc app=leetcode id=1221 lang=javascript
 *
 * [1221] Split a String in Balanced Strings
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let count = 0;
  let balance = 0;
  for (let c of s) {
    if (c === "R") {
      balance++;
    } else {
      balance--;
    }
    if (balance === 0) {
      count++;
    }
  }
  return count;
};
// @lc code=end
