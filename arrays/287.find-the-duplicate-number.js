/*
 * @lc app=leetcode id=287 lang=javascript
 *
 * [287] Find the Duplicate Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    const map=new Map()
    for (let num of nums)
    {
        if(map.has(num))
        {
            return num
        }
        else{
            map.set(num,1)
        }
    }
    const set=new Set()
     for (let num of nums)
    {
        if(set.has(num))
        {
            return num
        }
        else{
            set.add(num)
        }
    }

    
};
// @lc code=end

