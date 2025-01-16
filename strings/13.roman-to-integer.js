/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let res = 0;
  let map = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);
  for (let i = 0; i < s.length; i++) {
    if (i + 1 < s.length && map.get(s[i]) < map.get(s[i + 1])) {
      res -= map.get(s[i]);
    } else {
      res += map.get(s[i]);
    }
  }
  return res;
};
// @lc code=end
