/*
 * @lc app=leetcode id=1021 lang=javascript
 *
 * [1021] Remove Outermost Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  // Initialize empty string to store result
  let result = "";

  // Counter to keep track of opening and closing brackets
  // This helps us identify the outermost parentheses
  let openCount = 0;

  // Iterate through each character in the input string
  for (let char of s) {
    // Case 1: When we encounter an opening bracket '('
    if (char === "(") {
      // Only add '(' to result if it's not an outermost bracket
      // openCount > 0 means we're inside a primitive decomposition
      if (openCount > 0) {
        result += char;
      }
      // Increment openCount for each opening bracket
      openCount++;
    }

    // Case 2: When we encounter a closing bracket ')'
    else if (char === ")") {
      // Decrement openCount first
      openCount--;
      // Only add ')' to result if it's not an outermost bracket
      // openCount > 0 means we're still inside a primitive decomposition
      if (openCount > 0) {
        result += char;
      }
    }
  }

  return result;
};
// @lc code=end
