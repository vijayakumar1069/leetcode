/*
 * @lc app=leetcode id=704 lang=javascript
 *
 * [704] Binary Search
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while(left <= right) {
        // Calculate mid inside loop
        let mid = Math.floor((left + right) / 2);
        
        // Check if target is found
        if(nums[mid] === target) {
            return mid;
        }
        // If target is greater, ignore left half
        else if(nums[mid] < target) {
            left = mid + 1;
        }
        // If target is smaller, ignore right half
        else {
            right = mid - 1;
        }
    }
    
    // Target not found
    return -1;
    
};
// @lc code=end

