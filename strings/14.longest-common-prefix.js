/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let res="";
for(let i=0;i<strs[0].length;i++){
    for(let s of strs){
        if(i==s.length||s[i]!=strs[0][i]){
            return res
        }
    }
    res+=strs[0][i]
}
return res
    
};
// @lc code=end

