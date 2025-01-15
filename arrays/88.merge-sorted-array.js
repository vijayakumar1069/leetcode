/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let last=n+m-1;
    while(n>0 && m>0)
    {
        if(nums1[m-1]>nums2[n-1])
        {
            nums1[last]=nums1[m-1];
           m--
        }
        else{
            nums1[last]=nums2[n-1]
            n--
        }
        last--;
    }
    while(n>0)
    {
        nums1[last]=nums2[n-1];
        n--;
        last--;
    }
    return nums1;
    
};
// @lc code=end

