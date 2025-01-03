const maximumProduct = function (arr) {
  if (arr.length < 3) {
    return -1; // Less than 3 candidates, return -1
  }

  let max1 = Number.MIN_SAFE_INTEGER;
  let max2 = Number.MIN_SAFE_INTEGER;
  let max3 = Number.MIN_SAFE_INTEGER;

  let min1 = Number.MAX_SAFE_INTEGER;
  let min2 = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= max1) {
      max3 = max2;
      max2 = max1;
      max1 = arr[i];
    } else if (arr[i] >= max2) {
      max3 = max2;
      max2 = arr[i];
    } else if (arr[i] >= max3) {
      max3 = arr[i];
    }

    if (arr[i] <= min1) {
      min2 = min1;
      min1 = arr[i];
    } else if (arr[i] <= min2) {
      min2 = arr[i];
    }
  }

  return Math.max(max1 * max2 * max3, min1 * min2 * max1);
};

console.log(maximumProduct([1, 2, 3]));
console.log(maximumProduct([-3, -2, -1]));
console.log(maximumProduct([-4, -3, -2, 1, 2, 3]));
