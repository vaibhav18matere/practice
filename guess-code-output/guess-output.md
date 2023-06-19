1. 
```jsx
<div id="div">
     <button id="btn">Button</button>
</div>

const outerDiv = document.querySelector("#div");

const innerBtn = document.querySelector("#btn");

outerDiv.addEventListener("click", function () {
  console.log("div clicked");
});

innerBtn.addEventListener("click", function () {
  console.log("btn clicked");
});

// btn clicked 
// div clicked 

```
2. 
Que. To create web apps that can gracefully handle a lost network connection and sync data in background thread after the device comes back online, we should use -
- AppCache API ✅
- A worklet
- A shared worker
- A service worker

3. 
Que. Which of the client side storage API (when supported by the browser) areaccesiible to service workers?
- Session Storage
- Local Storage
- IndexDB
- Cache
- Cookies
4. 
```jsx
let foo = function(){
  console.log(a);
  let a = 5;
  console.log(a)
}

foo();
// reference error
```
5. 
```jsx
let foo = function(){
  console.log(a);
  var a = 5;
  console.log(a)
}

foo();
// undefined
// 5
```
6. 
```jsx
const obj1 = {
  a: 5,
  b: {
    c: 6
  }
};

const obj2 = Object.assign({}, obj1);

const obj3 = { ...obj1 };

obj1.b.c = 8;

console.log(Object.assign({}, obj1, obj2, obj3));
//   a: 5,
//   b: {
//     c: 8
//   }
```
7. 
```jsx
var newSetCreate = new Set([1, 2, 3, 4, 5, 5]);

console.log(newSetCreate);
// { 0: 1
//   1: 2
//   2: 3
//   3: 4
//   4: 5
// }
```
8. 
```jsx
var power = "8";

function getPower() {
  var power = "10";
  function f() {
    return power;
  }
  return f;
}

getPower();
```
9. What will be the code output ?
```jsx
var obj = {
  hasOwnProperty: 1,
  foo: 2
};

obj.hasOwnProperty("foo");
// obj.hasOwnProperty is not a function
```

```jsx
function person(id, name) {
  var id = id;
  var name = name;
}

function student(id, name) {
  person.call(this, id, name);
}

console.log(new student(1, "Vaibhav").id);
// undefined
```
10. 
```jsx
Boolean("false") === Boolean(false)
```
- Explanation:
- In JavaScript, the Boolean() function is used to convert a value into its corresponding boolean representation. When the argument passed to the Boolean() function is a non-empty string, it will always evaluate to true. This is because any non-empty string is considered truthy in JavaScript.

- In this case, the argument passed to the Boolean() function is the string "false". Since it is a non-empty string, the Boolean() function will return true.

- On the other hand, the boolean value false is a literal value representing the boolean false.

- Comparing the two expressions:

- Boolean("false") will evaluate to true because the string "false" is truthy.
- Boolean(false) will evaluate to false because false is already a boolean value.
- Therefore, the comparison Boolean("false") === Boolean(false) is equivalent to true === false, which is false.

- So, the correct answer is false, not true.

11. 
```jsx
function getS() {
  var powers = [];
  for (let stoneNo = 0; stoneNo <= 10; stoneNo++)
    powers[stoneNo] = function () {
      return stoneNo;
    };
  return powers;
}

var powers = getS();

console.log(powers[5]());
```
12. what package contains render function that renders a React element tree to the DOM?
- ReactDOM
13. what kind of Data Binding does React.js have ?
- React.js primarily uses one-way data binding, also known as unidirectional data flow. 

- In React, data flows in a single direction, from a parent component to its child components. Parent components pass data and properties (props) down to their child components, which can then use and display the data received.

- The parent component is responsible for managing the state of the application and passing it down as props to child components. When the state changes, React re-renders the affected components, ensuring that the UI stays in sync with the data.

- Child components cannot directly modify the props they receive from their parent components. Instead, if a child component needs to update data, it can trigger an event or callback function passed down as props. The parent component can then handle the event and update the state accordingly, which will propagate the changes down to the child components.

- This one-way data flow helps to maintain a clear and predictable data flow in the application, making it easier to understand and debug how data changes affect the UI. It also helps in optimizing performance by efficiently updating only the necessary components when data changes occur.

- However, it's important to note that React also supports two-way data binding in specific cases. Two-way data binding can be achieved by combining one-way data flow with controlled components, where the value of an input field is controlled by React's state and is updated through user interactions and events.

13. If you want to import just the component from React library then what syntax do you use?
```jsx
import { ComponentName } from 'react';
import { useState } from 'react';
```
14. What are two ways data gets handled in React?
- 1. Props
- 2. State

15. Number of elements, a valid React component can return is ...
- One (you can only have a single parent element as the top-level element).

16. How to empty sn array in javascript?
```jsx
array.length = 0;

array = [];

array.splice(0, array.length);
```

17. What is the loop through the properties of an Object ?
- for..in loop

18. what is main purpose of webpack ?
-  To bundle and package JavaScript modules, along with their dependencies, for use in a web application.
-  Module bundling
-  Code splitting
-  Loaders
-  Plugins
-  Development server
-  Asset management
