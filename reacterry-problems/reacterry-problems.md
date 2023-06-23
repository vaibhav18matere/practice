### 1. Implement a function called removeWhitespaces(string) that takes a string as the input. The function should return the string with all the whitespace removed.
```js
- removeWhitespaces('Hello,   World!'); // Output: 'Hello,World!'
- removeWhitespaces('  This is a sentence.\nIt contains some whitespace.  '); // Output: 'Thisisasentence.Itcontainssomewhitespace.'
- removeWhitespaces('\t  \n\n'); // Output: ''
```
```js
// solution :

const removeWhitespaces = (string) => {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ' && string[i] !== '\n' && string[i] !== '\t') {
      result += string[i];
    }
  }
  return result;
};

// Time: O(n)
// Space: O(n)
```
- using regex
```js
const removeWhitespaces = (string) => {
  return string.replace(/\s/g, '');
};

// Time: O(n)
// Space: O(n)
```

### 2.  implement a function called reverseArray(array, value) that takes one argument: an array. The function should reverse the order of the elements in the array.
```js
- reverseArray([1, 2, 3, 4]); // Output: [4, 3, 2, 1]
- reverseArray([1, 2]); // Output: [2, 1]
- reverseArray([]); // Output: []
```

```js
// solution

var arr = [1, 2, 3, 4];

const reversedArr = (arr) => {
  arr.reverse();
};

reversedArr(arr);

// Time: O(n)
// Space: O(n)
```

```js
// solution

const arr = [1, 2, 3, 4];
const arr1 = ["vaibhav"];
const arr2 = [];
const arr3 = ["apple", "banana", "orange"];
const arr4 = [
  { name: "Vaibhav", age: 25 },
  { name: "Shubham", age: 23 }
];

const reversedArr = (arr) => {
  const newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
};

console.log(reversedArr(arr));
console.log(reversedArr(arr1));
console.log(reversedArr(arr2));
console.log(reversedArr(arr3));
console.log(reversedArr(arr4));

// Time: O(n)
// Space: O(n)
```