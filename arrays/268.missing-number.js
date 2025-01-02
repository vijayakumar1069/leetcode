/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

//   let n = nums.length;
//   let sum = (n * (n + 1)) / 2;
//   let missing = 0;
//   for (let num of nums) {
//     missing += num;
//   }
//   return sum - missing;
var missingNumber = function (nums) {
  let n = nums.length;
  let xor1 = 0;
  let xor2 = 0;

  // XOR all the numbers from 0 to n
  for (let i = 0; i <= n; i++) {
    xor1 ^= i;
  }

  // XOR all the numbers in the input array
  for (let num of nums) {
    xor2 ^= num;
  }

  // The missing number is the result of xor1 ^ xor2
  return xor1 ^ xor2;
};

// @lc code=end
