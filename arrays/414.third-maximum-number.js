/*
 * @lc app=leetcode id=414 lang=javascript
 *
 * [414] Third Maximum Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let first = -Infinity;
    let second = -Infinity;
    let third = -Infinity;
    
    for(let num of nums) {
        // Skip if number is equal to any of the maximums
        if(num === first || num === second || num === third) continue;
        
        if(num > first) {
            third = second;
            second = first;
            first = num;
        } else if(num > second) {
            third = second;
            second = num;
        } else if(num > third) {
            third = num;
        }
    }
    
    // If third maximum doesn't exist, return maximum
    return third === -Infinity ? first : third;
};

// @lc code=end

