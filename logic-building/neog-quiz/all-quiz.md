Each Question has 3 options. Correct answers are highlighted in bold.

Time needed to complete this Quiz: 12 minutes

1. What does the following code output?

```jsx
{
	var x = 2;
	var y = "2";
	console.log(x == y)
}
```

A. Returns false since x is a number and y is a string

**B. Returns true since the value of both x and y is the same**

C. Returns true since both variables are declared using var

1. What does the following code output?

```jsx
{
	var x = 3;
	var y = "3";
	console.log(x + y)
}
```

**A. 33**

B. 6

C. Syntax Error: Cannot add different variable types

1. What does NaN represent?

A. **Not-a-Number**

B. Negative-and-Number

C. Null-a-Number

1. What does the following code output?

```jsx
{
	var obj = { name: "Akanksha", surname: "Choudhary" };
	var obj = { name: "Tanvi", surname: "Priya" };
	console.log(obj);
}
```

A. { name: "Akanksha", surname: "Choudhary" }

B. Type Error: Assignment to var variable

**C. { name: "Tanvi", surname: "Priya" }**

1. What does the following code output?

```jsx
{
	const obj = { color: "blue", item: "top" };
	var obj = { color: "yellow", item: "shirt" };
	console.log(obj);
}
```

A. undefined

B. { color: "yellow", item: "shirt" }

**C. SyntaxError: Identifier 'obj' has already been declared**

1. What does “this” refer to in the following code?

```jsx
var myData = {
	name: "Parul",
	printName: function(){
		console.log(this.name)	
	}
}
myData.printName();
```

A. printName

B. name

**C. myData**

1. What does the following code output?

```jsx
var myData = {
	name: "Parul",
	printName: function(role){
		console.log(name, role)	
	}
}
myData.printName("PA");
```

**A. “” PA**

B. Parul undefined

C. Parul PA

1. What does the following code output?

```jsx
function getFavColor(){
	console.log(favColor1);
  let favColor1 = "red";
  var favColor2 = "Yellow";
}
getFavColor();
```

**A. Throws an error**

B. red

C. “”

1. What does the following code output?

```jsx
function getFavColor(){
	console.log(favColor2);
  let favColor1 = "red";
  var favColor2 = "Yellow";
}
getFavColor();
```

A. yellow

B. red

**C. undefined**

1. What does the following code output?

```jsx
function getFavColor(){
	var favColor2 = "Yellow";
  let favColor1 = "red";
}
getFavColor();
console.log(favColor2);
```

A. yellow

B. red

**C. Throws an error**

Each Question has 3 options. Correct answers are highlighted in bold.

1. Which statement is true about promises in javaScript?
    
    A. Promises are used to handle synchronous operations in javascript.
    
    B. Settled is the initial state of a promise.
    
    **C. Promise object has four states. Pending, Fulfilled, Rejected, Settled.**
    
2. Which concept does the following code depict?
    
    ```jsx
    const cycleDetails = {
      wheels: 2,
      seat: 1,
      carrier: 2
    };
    
    const { wheels: cycleWheels, seat: cycleSeat } = cycleDetails;
    
    console.log(cycleWheels); 
    console.log(cycleSeat);
    ```
    
    A. ****Object Destructuring****
    
    B. Hoisting
    
    C. Spread Operator usage
    

1. What is the purpose of array slice method?
    
    A. The slice() ****method returns the selected elements in an object as a new array object.
    
    **B.** **The slice() method returns the selected elements in an array as a new array object.**
    
    C. The slice() ****method mutates the original array and returns the same modified array.
    
2. Which of the following statements and their output is correct?
    
    A. `isNaN("neoG")  *// Returns false*`
    
    B. `isNaN(false) *// Returns true*`
    
    **C. `isNaN(undefined) *// Returns true*`**
    

1. What does the following code output?
    
    ```jsx
    const curryUnaryFunction = (a) => (b) => (c) => a + b - c;
    console.log(curryUnaryFunction(1)(3)(3));
    ```
    
    A. 7
    
    B. (a) => (b) => (c) => a + b + c
    
    **C. 1**
    
2. Which of the following options is true about the code below?
    
    ```jsx
    let numberArray = [];
    const addNumber = (number) => (argNumberArray) =>
      argNumberArray.concat([number]);
    
    addNumber(7)(numberArray)
    ```
    
    **A. addNumber is a pure function**
    
    B. addNumber is an impure function
    
    C. addNumber is not a function.
    
3. Which of the following is true?
    
    **A. localStorage persists data even after browser is closed and reopened.**
    
    B. sessionStorage persists data even after browser is closed and reopened.
    
    C. localStorage is same as a cookie.
    
4. Which of the following is true about window and document?
    
    A. Window is the direct child of a document.
    
    B. **Document is the direct child of the window object.**
    
    C. Document is the root level element in any web page.
    
5. What is the correct way to add a key value pair to an object?
    
    ```jsx
    var obj = {
      key1: "value1",
      key2: "value2",
    };
    ```
    
    A. `obj.("key3") = "value3";`
    
    B. `**obj["key3"] = "value3"**`
    
    C. `obj("key3") = "value3";`
    
6. What does the following code output?
    
    ```jsx
    function calculateSum(x, y, z) {
      return x + y + z;
    }
    
    const numbers = [1, 2, 3];
    
    console.log(calculateSum(...numbers));
    ```
    
    A. undefined
    
    B. throws an error
    
    **C. 6**
    1. Which of the following is not a CSS position?
    
    A. Absolute
    
    B. Relative
    
    **D. Overflow**
    

1. Which of the following is true?
    
    A. `@media (max-width: 500px){...}` means you want to apply rules to those media whose min-width is 500 px.
    
    **B. `@media (max-width: 500px){...}` means you want to apply rules to those media whose max-width is 500 px.**
    
    C. `@media (max-width: 500px){...}` means you want to apply rules only to Desktop view.
    
2. Which of the following is true?
    
    A. <p> is an inline element by default.
    
    B. inline-block elements have the same behaviour as block elements.
    
    **C. <div> and <h1> are block elements by default.**
    

1. What will be the colour of the text ‘JavaScript’ in the following code?
    
    ```jsx
    <ul class="language-list" id="awesome">
        <li><span>Python</span></li>
        <li class="favorite" id="must-code">
    			<span class="highlight">JavaScript</span>
    		</li>
    </ul>
    
    <style>
      ul#awesome {
        color: red;
      }
      ul.language-list li.favorite span {
        color: blue;
      }
    </style>
    ```
    
    A. red
    
    **B. blue**
    
    C. black
    
2. What will be the colour of the text ‘JavaScript’ in the following code?
    
    ```jsx
    <ul class="language-list" id="awesome">
        <li><span>Python</span></li>
        <li class="favorite" id="must-code">
    			<span class="highlight">JavaScript</span>
    		</li>
    </ul>
    
    <style>
      ul#awesome #must-code {
      color: red !important;
    }
    .favorite span {
      color: blue;
    }
    </style>
    ```
    
    A. red
    
    **B. blue**
    
    C. black
    
3. What is the correct way to write style to display hyperlinks without an underline?
    
    **A. a {text-decoration:none;}**
    
    B. a {decoration:no-underline;}
    
    C.a {text-decoration:no-underline;}
    

1. What is the default value of the CSS position property?
    
    A. relative
    
    **B. static**
    
    C. absolute
    
2. Which is the correct CSS to display a border with top border = 10 pixels, bottom border = 5 pixels, left border = 20 pixels and right border = 1pixel?
    
    A. border-width:5px 20px 10px 1px;
    
    B. border-width:10px 20px 5px 1px;
    
    **C. border-width:10px 1px 5px 20px;**
    

1. What is the correct JavaScript syntax to change the content of the HTML element below?
    
    ```jsx
    <p id="demo">I know Python</p>
    ```
    
    **A. document.getElementById(”demo”).innerHTML = “I know JavaScript”**
    
    B. document.getElement(”p”).innerHTML = “I know JavaScript”
    
    B. ”demo”.innerHTML = “I know JavaScript”
    

10. How do you select an element with id 'book'?

A. .book

**B. #book**

C. book
1. Which event occurs when a user clicks on an HTML element?
    
    A. onHover
    
    B. onmouseover
    
    **C. onClick**
    
2. Which of the following is true?
    
    A. `position: relative;` is the default position for all HTML elements.
    
    **B. An element with `position: fixed;` is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled.**
    
    C. The top, right, bottom, and left properties cannot be used with  ****`position: fixed;` ****
    
3. How can you combine the following arrays using the spread operator?
    
    ```jsx
    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];
    
    // Output: [1, 2, 3, 4, 5, 6]
    ```
    
    **A. const combinedArray = [...array1, ...array2];**
    
    B. const combinedArray = array1 + array2;
    
    C. const combinedArray = [array1, array2];
    
4. What will the following code output?
    
    ```jsx
    const name = "Dave";
    const age = 40;
    const myData = { name, age };
    console.log(myData);
    ```
    
    A. {"Dave", 40}
    
    **B. {name: "Dave", age: 40}**
    
    C. {myData: {name: "Dave", age: 40}}
    

1. What will the following code output?
    
    ```jsx
    const person = {
      fullName: function (city, country) {
        console.log(firstName + " " + lastName + "," + city + "," + country);
      }
    };
    
    const person1 = {
      firstName: "John",
      lastName: "Doe"
    };
    
    person.fullName.call(person1, "Oslo", "Norway");
    ```
    
    A. John Doe,Oslo,Norway
    
    **B. Throw an error**
    
    C. undefined undefined,Oslo,Norway
    
2. What will the following code output?
    
    ```jsx
    const person = {
      fullName: function (city, country) {
        console.log(
          this.firstName + " " + this.lastName + "," + city + "," + country
        );
      }
    };
    
    const person2 = {
      firstName: "John",
      lastName: "Dave"
    };
    
    person.fullName.call(person2, ["Oslo", "Norway"]);
    ```
    
    **A. John Dave,Oslo,Norway,undefined**
    
    B. John Dave,[Oslo,Norway],undefined
    
    C. John Dave,[Oslo,Norway]
    

1. What is true about the following two statements?
    
    ```jsx
    Statement 1: Math.min(1,2,3)
    Statement 2: Math.min.apply(null, [1,2,3])
    ```
    
    A. Statement 1 will return 1 and Statement 2 will give an error.
    
    B. Both the statements are invalid.
    
    **C. Both the statements will return 1.**
    
2. What will the following code output?
    
    ```jsx
    const person = {
      firstName: "Mary",
      lastName: "Doe",
      display: function () {
        console.log(this.firstName + " " + this.lastName);
      }
    };
    
    setTimeout(person.display, 3000);
    ```
    
    A. Throws an error
    
    B. Mary Doe
    
    **C. undefined undefined**
    
3. What will the following code output?
    
    ```jsx
    const person = {
      firstName: "neoG",
      lastName: "Camp",
      display: function () {
        console.log(this.firstName + " " + this.lastName);
      }
    };
    
    let display = person.display.bind(person);
    setTimeout(display, 3000);
    ```
    
    A. Throws an error
    
    **B. neoG Camp**
    
    C. undefined undefined
    
4. Which of the following is true about the ‘this’ keyword?
    
    A. In an object method, ’this’ refers to the variable it is attached to**.**
    
    **B. When used alone, ’this’ refers to the global object.**
    
    C. We can change the value of ‘this’.
    
5. What is the correct way to add a class name to an element using JavaScript?
    
    A. element.class.add("myclassname")
    
    **B. element.classList.add("myclassname")**
    
    C. element.add("myclassname")
    
6. Which of the following it true about ‘let’ keyword.
    
    **A. Variables defined with let cannot be redeclared.**
    
    B. Variables defined with let are globally scoped.
    
    C. Variables defined with let cannot be redefined.
    
7. What will be the output of the following code?
    
    ```jsx
    var obj1 = {
        address : "Mumbai, India",
        getAddress:function(){
        console.log(this.address);
      }
    }
    
    var getAddress = obj1.getAddress;
    var obj2 = {name:"akshay"};
    obj2.getAddress();
    ```
    
    **A. Throws an error**
    
    B. “akshay”
    
    C. “Mumbai, India”
    
8. Which of the following is true about the following string methods?
    
    A. slice() joins two or more strings.
    
    B. slice() method replaces a specified value with another value in a string.
    
    **C. slice() extracts a part of a string and returns the extracted part in a new string.**
    
9. Which of the following is true?
    
    A. The indexOf() method returns an array with the index of (the position of) all the
     occurrences of a specified text in a string.
    
    **B. The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string.**
    
    C. There is no indexOf() method in javaScript.
    
10. What does the following code output?
    
    ```jsx
    console.log(["Banana", "Orange", "Apple", "Mango"].toString())
    ```
    
    A. '["Banana", "Orange", "Apple", "Mango"]’
    
    B. Throws an error
    
    **C. 'Banana,Orange,Apple,Mango’**
    
11. AJAX stands for?
    
    A. Arithmetic JavaScript And XML
    
    **B. Asynchronous JavaScript And XML**
    
    C. Annotations JavaScript And XML
    
12. What does the following code output?
    
    ```jsx
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    delete fruits[0];
    console.log(fruits.length)
    ```
    
    **A. 4**
    
    B. 3
    
    C. Throws an error
    
13. What will be the output of the following code?
    
    ```jsx
    var obj = {
        name:  "Aman",
        getName:function(){
        console.log(this.name);
      }
    }
    
    var getName = obj.getName;
    var obj2 = {name:"Akshay", getName };
    obj2.getName();
    ```
    
    **A. Akshay**
    
    B. Aman
    
    C. undefined
    
14. Which of the following is not an HTML element?
    
    A. <q>
    
    B. <s>
    
    **C. <y>**
1. What is the correct way to add a class name to an element using JavaScript?
    
    A. element.class.add("myclassname")
    
    **B. element.classList.add("myclassname")**
    
    C. element.add("myclassname")
    
2. Which of the following it true about ‘let’ keyword.
    
    **A. Variables defined with let cannot be redeclared.**
    
    B. Variables defined with let are globally scoped.
    
    C. Variables defined with let cannot be redefined.
    
3. What will be the output of the following code?
    
    ```jsx
    var obj1 = {
        address : "Mumbai, India",
        getAddress:function(){
        console.log(this.address);
      }
    }
    
    var getAddress = obj1.getAddress;
    var obj2 = {name:"akshay"};
    obj2.getAddress();
    ```
    
    **A. Throws an error**
    
    B. “akshay”
    
    C. “Mumbai, India”
    
4. Which of the following is true about the following string methods?
    
    A. slice() joins two or more strings.
    
    B. slice() method replaces a specified value with another value in a string.
    
    **C. slice() extracts a part of a string and returns the extracted part in a new string.**
    
5. Which of the following is true?
    
    A. The indexOf() method returns an array with the index of (the position of) all the
     occurrences of a specified text in a string.
    
    **B. The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string.**
    
    C. There is no indexOf() method in javaScript.
    
6. What does the following code output?
    
    ```jsx
    console.log(["Banana", "Orange", "Apple", "Mango"].toString())
    ```
    
    A. '["Banana", "Orange", "Apple", "Mango"]’
    
    B. Throws an error
    
    **C. 'Banana,Orange,Apple,Mango’**
    
7. AJAX stands for?
    
    A. Arithmetic JavaScript And XML
    
    **B. Asynchronous JavaScript And XML**
    
    C. Annotations JavaScript And XML
    
8. What does the following code output?
    
    ```jsx
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    delete fruits[0];
    console.log(fruits.length)
    ```
    
    **A. 4**
    
    B. 3
    
    C. Throws an error
    
9. What will be the output of the following code?
    
    ```jsx
    var obj = {
        name:  "Aman",
        getName:function(){
        console.log(this.name);
      }
    }
    
    var getName = obj.getName;
    var obj2 = {name:"Akshay", getName };
    obj2.getName();
    ```
    
    **A. Akshay**
    
    B. Aman
    
    C. undefined
    
10. Which of the following is not an HTML element?
    
    A. <q>
    
    B. <s>
    
    **C. <y>**
1. What will be the output of the following code?
    
    ```jsx
    function func(num) {
      return num*num;
    }
    
    console.log(func(7))
    ```
    
    A. 36
    
    B. 14
    
    **C. 49**
    
2. Consider the following code. What is the correct way to add this text "This is a new paragraph." to the paragraph element?
    
    ```jsx
    const para = document.createElement("p");
    const node = document.createTextNode("This is a new paragraph.");
    ```
    
    A. para.addNode(node);
    
    **B. para.appendChild(node);**
    
    C. para.child(node)
    
3. Select the option which is false about React Hooks.
    
    A. Hooks don’t work inside classes.
    
    **B. useStatus and useProps are built-in react Hooks.**
    
    C. Hooks are a new release in React 16.8
    
4. Select the option that is false about React.
    
    A. It can be rendered on the server.
    
    **B. It uses the real DOM instead of the Virtual DOM.**
    
    C. React is a library.
    
5. What does <Link> component do in React Router?
    
    **A. It is used to navigate to a particular URL and the view is re-rendered without a
    browser refresh.**
    B. It is used to navigate to a particular URL and the view is re-rendered with a browser
    refresh.
    C. When Link is clicked the components are rendered even though the prop path does
    not match the current URL.
    

1. What is the correct way to import <Link> in your React code?
A. import { Link } from ‘react-dom’;
B. import { Link } from ‘react-route’;
**C. import { Link } from ‘react-router-dom’;**

1. When you navigate to a route using <Link> and then click the browser’s back button,
what happens internally? Select the most appropriate correct option.
    
    A. Upon clicking a link, stack.push() is called and an entry is added to the stack. And on
    clicking the back button you are navigated to the home route.
    
    **B. Upon clicking a link, history.push() is called and an entry is added to the history
    stack. And on clicking the back button you are navigated to the previous route that
    was accessed.**
    
    C. Upon clicking a link, history.replace() is called and an entry is added to the history
    stack. And on clicking the back button the current route is replaced with the home
    route.
    
2. Link component has a “to” prop to specify the link location. It has other props as well. Select
the one which is not a prop of Link.
    
    A. replace
    
    B. innerRef
    
    **C. refCallback**
    
3. What is the difference between Link and the HTML’s anchor element?
    
    A. Link component reloads the page to change the UI but anchor tag does not require
    the page to be reloaded for the new UI to load.
    
    **B. Link component does not reload the page for new UI to load but anchor tag
    requires the page to be reloaded for the new UI to load.**
    
    C. Link component does not change the URL on reload and in spite of that new UI
    loads, but anchor tag changes the URL and only then the new UI loads.
    

1. Select the code which is a valid representation of <Link> component.
    
    **A. <Link to={location => ({ …location, pathname: “/about”})} />**
    
    B. <Link pathname={location => ({ …location, pathname: “/about”})} />
    
    C. <Link to={location => ({ …location, to: “/about”})} />
