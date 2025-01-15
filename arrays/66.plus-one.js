/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) { 
    digits=digits.reverse();
    let carry=1;
    let i=0;
    while(i<digits.length)
    {
        if(digits[i]==9)
        {
            digits[i]=0;
            carry=1;
        }
        else{
            digits[i]++;
            carry=0;
            break;
         
        }
        i++
    }
    if(carry)
    {
        digits.push(1);
    }
    return digits.reverse();
    
};
// @lc code=end

