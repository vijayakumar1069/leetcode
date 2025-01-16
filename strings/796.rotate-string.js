/*
 * @lc app=leetcode id=796 lang=javascript
 *
 * [796] Rotate String
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  //   // Check if lengths are different
  //   if (s.length !== goal.length) {
  //     return false;
  //   }

  //   // Convert string to array since strings are immutable in JavaScript
  //   let arr = s.split("");

  //   // Try all possible rotations
  //   for (let i = 0; i < s.length; i++) {
  //     // Rotate array by 1 position
  //     const firstChar = arr.shift();
  //     arr.push(firstChar);

  //     // Check if current rotation matches goal
  //     if (arr.join("") === goal) {
  //       return true;
  //     }
  //   }

  //   return false;
  if (s.length !== goal.length) {
    return false;
  }

  // Concatenate s with itself and check if goal is a substring
  // For example: s = "abcde", goal = "cdeab"
  // s + s = "abcdeabcde"
  // goal "cdeab" is a substring of "abcdeabcde"
  return (s + s).includes(goal);
};
// @lc code=end
