/*
 * @lc app=leetcode id=345 lang=javascript
 *
 * [345] Reverse Vowels of a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let left = 0;
  let right = s.length - 1;

  s = s.split("");
  while (left < right) {
    while (left < right && !vowels.includes(s[left])) {
      left++;
    }
    while (left < right && !vowels.includes(s[right])) {
      right--;
    }
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
  return s.join("");
};
// @lc code=end
