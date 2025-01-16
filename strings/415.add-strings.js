/*
 * @lc app=leetcode id=415 lang=javascript
 *
 * [415] Add Strings
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let res = "";
  let carry = 0;
  let i = num1.length - 1;
  let j = num2.length - 1;

  while (i >= 0 || j >= 0) {
    let sum = carry;
    if (i >= 0) {
      sum += parseInt(num1[i]);
    }
    if (j >= 0) {
      sum += parseInt(num2[j]);
    }
    res += sum % 10; //3%10=3
    carry = Math.floor(sum / 10); //13/10=1
    i--;
    j--;
  }

  if (carry > 0) {
    res += carry;
  }

  return res.split("").reverse().join("");
};
// @lc code=end
