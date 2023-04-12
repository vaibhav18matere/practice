// given an array of integers, sort the array
const arr = [-6, 20, 8, -2, 4];
// should return [-6,-2, 4, 8, 20]
// rarely used

const arr2 = [-5, 2, -74, -6, 5];
const arr3 = [-5, 2, 4, 6, -1];

function bubbleSort(arr) {
  let isSwapped;
  do {
    isSwapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isSwapped = true;
      }
    }
  } while (isSwapped);
}

bubbleSort(arr3);
console.log(arr3);

// Time complexity - Quadratic => O(n^2)