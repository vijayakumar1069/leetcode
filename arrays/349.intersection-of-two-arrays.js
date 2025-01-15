/*
 * @lc app=leetcode id=349 lang=javascript
 *
 * [349] Intersection of Two Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const set=new Set(nums1)
    const res=[]
    for(let i=0;i<nums2.length;i++)
    {
        if(set.has(nums2[i]))
        {
            res.push(nums2[i])
            set.delete(nums2[i])
        }
    }
    return res
    
};
// @lc code=end

