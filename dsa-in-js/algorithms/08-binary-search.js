// given SORTED array of n elements and target t element. find index of target element ' return -1 if not present.
// arr = [-5, 2, 4, 6, 10], t=10 => should return 4.

function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    // for even no. of elements => Math.floor

    if (target === arr[middleIndex]) {
      return middleIndex;
    }

    // to check wheather to go to left or right...
    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}

console.log(binarySearch([-5, 2, 4, 6, 10], 10));
console.log(binarySearch([-5, 2, 4, 6, 10], 6));
console.log(binarySearch([-5, 2, 4, 6, 10], 20));

// Array should always be sorted to solve problems in Binary search,
// if not then you can sort it and do the operations if required.

// Time complexity => O(logn)
