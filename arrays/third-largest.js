const thirdLargestFunction = (arr) => {
  if (arr.length < 2) {
    return -1;
  }
  const n = arr.length;
  let largest = -1;
  let secondLargest = -1;
  let thirdLargest = -1;
  for (let i = 0; i < n; i++) {
    if (arr[i] > largest) {
      thirdLargest = secondLargest;
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest) {
      thirdLargest = secondLargest;
      secondLargest = arr[i];
    } else if (arr[i] > thirdLargest) {
      thirdLargest = arr[i];
    }
  }
  return thirdLargest;
  //   let left = 0;
  //   let right = arr.length - 1;

  //   while (left < right) {
  //     let mid = Math.floor((left + right) / 2);
  //     if (arr[mid] > arr[mid + 1]) {
  //       right = mid;
  //     } else {
  //       left = mid + 1;
  //     }
  //   }

  //   return left;
};

console.log(thirdLargestFunction([2, 4, 1, 3, 5]));
console.log(thirdLargestFunction([20, 4, 10, 35, -500]));
