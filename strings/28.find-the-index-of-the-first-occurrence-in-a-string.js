/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Find the Index of the First Occurrence in a String
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  //   return haystack.indexOf(needle);
  if (haystack.length == 0 && needle.length == 0) return 0;
  let i = 0;
  while (i < haystack.length) {
    if (haystack[i] == needle[0]) {
      if (haystack.slice(i, i + needle.length) == needle) {
        return i;
      }
    }
    i++;
  }
  return -1;
};
// @lc code=end
