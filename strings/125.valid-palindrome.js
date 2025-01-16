/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // Convert to lowercase and remove non-alphanumeric characters
  let cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Check if it reads the same forward and backward
  return cleanStr === cleanStr.split("").reverse().join("");
};
// @lc code=end
