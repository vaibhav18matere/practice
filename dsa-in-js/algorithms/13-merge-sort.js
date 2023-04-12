// given an array of integers, sort the array
const arr = [-6, 8, 20, -2, 4];
// should return [-6,-2, 4, 8, 20]

// Steps :
// 1. Devide the array into sub-arrays, each containing only one element.
// (an array with one elm is considered sorted)
// 2. repeatedly merge sub arrays to produce new sorted sub arrays
// until there is only one sub-array remaining.
// 3. that will be sorted array

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const midElm = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, midElm);
  const rightArr = arr.slice(midElm);

  // now, we have to repeat till it becomes empty array, so
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  let sortedArr = []; // to hold sorted elm

  while (leftArr.length && rightArr.length) {
    // to check both arrays are empty

    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr];
}

console.log(mergeSort(arr));

// we devide problem into half = log(n) ; also while loop = linear (n) so,
// Time complexity - O(nlogn)
// this is best time complexity while sorting an array
