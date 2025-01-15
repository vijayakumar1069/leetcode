/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
   const res=[]
   nums.sort((a,b)=>a-b)
   for(let i=0;i<nums.length-2;i++)
   {
    if(i>0 && nums[i]==nums[i-1])
    {
        continue
    }
       let left=i+1
       let right=nums.length-1
       while(left<right)
       {
           let sum=nums[i]+nums[left]+nums[right]
           if(sum>0)
           {
               right--
           }
           else if(sum<0)
           {
               left++
           }
           else
           {
               res.push([nums[i],nums[left],nums[right]])
               left++
              while(left<right && nums[left]==nums[left-1])
              {
                  left++
              }
           }
       }
   } 
   return res
    
};
// @lc code=end

