/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const map=new Map()
    for(let num of nums)
    {
        if(map.has(num))
        {
            map.set(num,map.get(num)+1)
        }
        else
        {
            map.set(num,1)
        }
    }
    for(let [key,value] of map)
    {
        if(value===1)
        {
            return key
        }
    }
    
};
// @lc code=end

