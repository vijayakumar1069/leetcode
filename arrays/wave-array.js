const wava_Array = (nums) => {
  nums.sort((a, b) => a - b);
  console.log(nums);
  function swap(nums, a, b) {
    let temp = nums[a];
    nums[a] = nums[b];
    nums[b] = temp;
  }
  for (let i = 0; i < nums.length - 1; i += 2) {
    swap(nums, i, i + 1);
  }
  return nums;
};
console.log(wava_Array([10, 90, 49, 2, 1, 5, 23])); // Output: [1, 2, 3, 4, 5]
