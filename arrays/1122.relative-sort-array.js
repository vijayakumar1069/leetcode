/*
 * @lc app=leetcode id=1122 lang=javascript
 *
 * [1122] Relative Sort Array
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  let map = new Map();
  for (let num of arr1) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }
  const res = [];
  for (let num of arr2) {
    if (map.has(num)) {
      for (let i = 0; i < map.get(num); i++) {
        res.push(num);
      }
      map.delete(num);
    }
  }

  const remaining = [];
  map.forEach((key, value) => {
    let i = 0;
    while (i < key) {
      remaining.push(value);
      i++;
    }
  });
  remaining.sort((a, b) => a - b);
  return [...res, ...remaining];
};
// @lc code=end
