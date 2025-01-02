/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // Create a Map to store the complement of each number
  let complement = new Map();

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    // Check if the complement of the current number is in the Map
    if (complement.has(nums[i])) {
      // If it is, return the indices of the two numbers
      return [complement.get(nums[i]), i];
    }
    // Otherwise, store the complement of the current number in the Map
    complement.set(target - nums[i], i);
  }

  // If no two numbers add up to the target, return an empty array
  return [];
};

// @lc code=end
