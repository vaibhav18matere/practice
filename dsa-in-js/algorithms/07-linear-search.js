// given an array of n elements and target t element. find index of target element ' return -1 if not present.
// arr = [-5, 2, 10, 0], t=10 => should return 2.

function ifPresentInArray(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(ifPresentInArray([-5, 2, 10, 0], 10));
console.log(ifPresentInArray([6, 4, 7, 5], 1));

// Time complexity => O(n)

// another approach -> specific to javascript language because not every language will have .indexOf property.

function linearSearch2(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    return arr.indexOf(target);
  }
  return -1;
}

console.log(linearSearch2([6, 7, 8, 9], 9));
console.log(linearSearch2([6, 7, 8, 9], 1));
