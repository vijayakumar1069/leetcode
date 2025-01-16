/*
 * @lc app=leetcode id=1374 lang=javascript
 *
 * [1374] Generate a String With Characters That Have Odd Counts
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function (n) {
  let res = "";
  if (n % 2 == 0) {
    res += "a";
    n--;
  }
  while (n > 0) {
    res += "b";
    n--;
  }

  return res;
};
// @lc code=end
