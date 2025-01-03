/*
 * @lc app=leetcode id=162 lang=javascript
 *
 * [162] Find Peak Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  if (nums.length === 0) return -1;
  if (nums.length === 1) return 0;
  if (nums.length === 2) return nums[0] > nums[1] ? 0 : 1;
  // this binary search
  //   let left = 0;
  //   let right = nums.length - 1;

  //   while (left < right) {
  //     let mid = Math.floor((left + right) / 2);
  //     if (nums[mid] > nums[mid + 1]) {
  //       right = mid;
  //     } else {
  //       left = mid + 1;
  //     }
  //   }

  //   return left;
  let n = nums.length - 1;
  for (let i = 0; i < n; i++) {
    if (nums[i] > nums[i + 1]) {
      return i;
    }
  }
  return n;
};
// @lc code=end
