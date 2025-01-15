/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
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
        if(value>nums.length/2)
        {
            return key
        }
    }
    
};
// @lc code=end

