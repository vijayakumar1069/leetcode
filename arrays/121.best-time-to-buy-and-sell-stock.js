/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let maxProfit=0;
    let left=0,right=1;
    while(right<prices.length){
        if(prices[left]<prices[right])
        {
            profit=prices[right]-prices[left];
            maxProfit=Math.max(maxProfit,profit);
        }
        else{
            left=right;
        }
        right++;
    }
    return maxProfit;
    
};
// @lc code=end

