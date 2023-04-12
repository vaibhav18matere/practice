// given SORTED array of n elements and target t element. find index of target element ' return -1 if not present.
// arr = [-5, 2, 4, 6, 10], t=10 => should return 4.

function recursiveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);
  // Initially, leftIndex is 0 as it points first element
  // and rightIndex is arr.length - 1 as it points last elemen

  function search(arr, target, leftIndex, rightIndex) {
    if (leftIndex > rightIndex) {
      return -1;
    }

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (target === arr[middleIndex]) {
      return middleIndex;
    }
    if (target < arr[middleIndex]) {
      return search(arr, target, leftIndex, middleIndex - 1);
    } else {
      return search(arr, target, middleIndex + 1, rightIndex);
    }
  }
}

console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10));
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6));
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20));

// Time complexity - Logarithmic O(logn)
// input size reduce by half every time