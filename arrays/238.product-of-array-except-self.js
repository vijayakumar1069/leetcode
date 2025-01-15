/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    let sum=1
    for (let j =0; j < nums.length; j++) {
        if(i==j)
        {
            continue
        }
      sum*=nums[j]
    }
    res.push(sum)
  }
  return res;
};
// @lc code=end
