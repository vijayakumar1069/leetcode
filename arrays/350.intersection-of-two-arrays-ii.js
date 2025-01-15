/*
 * @lc app=leetcode id=350 lang=javascript
 *
 * [350] Intersection of Two Arrays II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const map=new Map()
   const res=[]
   for(let i=0;i<nums1.length;i++)
   {
       if(map.has(nums1[i]))
       {
          map.set(nums1[i],map.get(nums1[i])+1)
       }
       else
       {
           map.set(nums1[i],1)
       }
   }
  for( let i=0;i<nums2.length;i++)
  {
      if(map.has(nums2[i]))
      {
          res.push(nums2[i])
          if(map.get(nums2[i])>1)
          {
              map.set(nums2[i],map.get(nums2[i])-1)
          }
          else
          {
              map.delete(nums2[i])
          }
      }
  }
  return res
    
};
// @lc code=end

