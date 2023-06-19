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
