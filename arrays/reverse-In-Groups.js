const reverseInGropus = (arr, k) => {
  for (let i = 0; i < arr.length; i += k) {
    let left = i;
    let right = Math.min(i + k - 1, arr.length - 1);

    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  return arr;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const k = 3;
console.log(reverseInGropus(arr, k));
