/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // Use two pointers, i and j
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    // If the current element is not the value we need to remove
    if (nums[j] !== val) {
      // Move it to the front
      nums[i] = nums[j];
      i++;
    }
  }
  // The new length is i
  return i;
};

// @lc code=end
