// given an array of integers, sort the array
const arr = [-6, 8, 20, -2, 4];
// should return [-6,-2, 4, 8, 20]

//steps :

// 1. Identify the pivot element in the array
//  - Pick first element as pivot
//  - Pick last element as pivot (Our approach)
//  - Pick a random element as pivot
//  - Pick median as pivot

// 2. Put everything that's smaller than the pivot into a ‘left’ array
//    and everything that's greater than the pivot into a ‘right’ array.

// Repeat the process for the individual ‘left’ and ‘right’ arrays till you have an array of length 1
//    which is sorted by definition.

// 3. Repeatedly concatenate the left array,
// pivot and right array till one sorted array remains.

function quickSort(arr) {
  // basecase to guard recursion
  if (arr.length < 2) {
    return arr;
  }
  // last element as pivot
  let pivotElm = arr[arr.length - 1];

  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivotElm) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivotElm, ...quickSort(right)];
}

console.log(quickSort(arr));

// Time complexity (worst case) - O(n^2)
// - when array is already sorted.

// Time complexity (avarage case) - O(nlogn)
