/*
 * @lc app=leetcode id=941 lang=javascript
 *
 * [941] Valid Mountain Array
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    if (arr.length < 3) return false;
    let i = 0;

    // Walk up
    while (i + 1 < arr.length && arr[i] < arr[i + 1]) {
        i++;
    }

    // Peak can't be first or last
    if (i === 0 || i === arr.length - 1) return false;

    // Walk down
    while (i + 1 < arr.length && arr[i] > arr[i + 1]) {
        i++;
    }

    return i === arr.length - 1;
};

// @lc code=end
