/*
 * @lc app=leetcode id=38 lang=javascript
 *
 * [38] Count and Say
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let res = "1";
  for (let i = 1; i < n; i++) {
    let prev = res[0];
    let count = 1;
    let str = "";
    for (let j = 1; j < res.length; j++) {
      if (res[j] == prev) {
        count++;
      } else {
        str += count + prev;
        count = 1;
        prev = res[j];
      }
    }
    str += count + prev;
    res = str;
  }
  return res;
};
// @lc code=end
