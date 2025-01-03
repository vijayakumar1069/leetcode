function moveZeroes(nums) {
  let nonZeroIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      [nums[nonZeroIndex], nums[i]] = [nums[i], nums[nonZeroIndex]];
      nonZeroIndex++;
    }
  }
  return nums;
}
const nums1 = [0, 1, 0, 3, 12];

console.log(moveZeroes(nums1));

const nums2 = [0, 1, 2, 0, 3, 12];

console.log(moveZeroes(nums2));
