// 1. Virtually split the array into a sorted and an unsorted part
// 2. Assume that the first element is already sorted and remaining elements are unsorted
// 3. Select an unsorted element and compare with all elements in the sorted part
// 4. If the elements in the sorted part is smaller than the selected element, proceed to the next
//   element in the unsorted part. Else, shift larger elements in the sorted part towards the right.
// 5. Insert the selected element at the right index.
// 6. Repeat till all the unsorted elements are placed in the right order.

// given an array of integers, sort the array
const arr = [-6, 8, 20, -2, 4];
// should return [-6,-2, 4, 8, 20]

// Note : For Insertion sort, first element is always sorted

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;
    // j is index of sorted element and it's always at the left.
    while (j >= 0 && arr[j] > numberToInsert) {
      // we have to iterate till the first element of an array, so j>=0
      arr[j + 1] = arr[j]; // elm shifted to right by 1
      j = j - 1;
      //
    }
    arr[j + 1] = numberToInsert;
  }
}

insertionSort(arr);
console.log(arr);

const arr2 = [20, 8, 6, 4]; // descending array

// Time complexity - quadratic = O(n^2)
