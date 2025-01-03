const secondLargest = function (arr) {
  if (arr.length === 0) return -1;
  let largest = -1;
  let secondLargest = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
};

console.log(secondLargest([3, 2, 1, 5, 4]));
console.log(secondLargest([3, 2, 3, 1, 2, 4, 5, 5, 6]));
