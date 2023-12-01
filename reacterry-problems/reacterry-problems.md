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

// solution :

var arr = [1, 2, 3, 4];

const reversedArr = (arr) => {
  arr.reverse();
};

reversedArr(arr);

// Time: O(n)
// Space: O(n)
```

```js
// solution :

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

### 3. Write a simple App component that returns an input field of type text. Users can interact with the input field to type in any string they want. You’re meant to store this string in local storage so that every time when the page reloads it pre-fills the input field with the latest known value for the users.

```jsx
import React, { useState } from 'react';

const App = () => {
  const [value, setValue] = useState(localStorage.getItem('inputValue') || '');

  const onChangeHandler = (e) => {
    setValue(e.target.value);
    localStorage.setItem('inputValue', e.target.value);
  };

  return (
    <div>
      <input
        data-testid="input-id"
        type="text"
        value={value}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default App;


// approach :

// useState creates a state variable value and a function setValue to update the value. The initial value of value the cached inputValue from local storage (if exists) or an empty string.

// The handleChange function is called every time the user types into the input field. It updates the value of value by calling setValue and sets the same value in local storage under the key "inputValue".

// Finally, the component returns a JSX element that renders an input field with the value of value, and an onChange handler to call handleChange when the user types into the input field.
```

