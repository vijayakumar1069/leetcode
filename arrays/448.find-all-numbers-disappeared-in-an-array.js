/*
 * @lc app=leetcode id=448 lang=javascript
 *
 * [448] Find All Numbers Disappeared in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const set=new Set(nums)

    let result=[]

    for(let i=1;i<=nums.length;i++)
    {
        if(!set.has(i))
        {
            result.push(i)
        }
    }
    return result
};
// @lc code=end

