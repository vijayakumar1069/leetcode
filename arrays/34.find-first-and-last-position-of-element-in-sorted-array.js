/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  //   let first = -1;
  //   let last = -1;
  //   for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] == target) {
  //       first = i;
  //       break;
  //     }
  //   }
  //   for (let j = nums.length - 1; j >= 0; j--) {
  //     if (nums[j] == target) {
  //       last = j;
  //       break;
  //     }
  //   }
  //   return [first, last];
  let left = findIndex(nums, target, true);
  let right = findIndex(nums, target, false);
  return [left, right];
};
function findIndex(nums, target, leftBias) {
  let left = 0;
  let right = nums.length - 1;
  let i = -1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (target > nums[mid]) {
      left = mid + 1;
    } else if (target < nums[mid]) {
      right = mid - 1;
    } else {
      i = mid;
      if (leftBias) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }
  return i;
}
// @lc code=end
