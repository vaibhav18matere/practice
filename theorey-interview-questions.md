1. **Create a div element of height 100vh. Then create a Heading and centre it vertically as well as horizontally.**

```jsx
<div class="heading">
    <div class="title">Heading</div>
</div>
```

```jsx
.heading {
  background-color: grey;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.title {
  color: red;
}
```

2. **What is semantic HTML ?**
- Semantic HTML, or "semantically-correct HTML", is HTML where the tags used to structure content are selected and applied appropriately to the meaning of the content.
- For example, **<b></b> (for bold), and <i></i> (for italic)** should never be used, because they’re to do with formatting, not with the meaning or structure of the content. Instead, use the replacements **<strong></strong> and <em></em>** (meaning emphasis), which by default will turn text bold and italic (but don’t have to do so in all browsers), while adding meaning to the structure of the content.

2.1 **Followup Question:** **Why you would like to use a semantic tag ?**

**Answer:** ***Search Engine Optimization, accessibility, repurposing, light code.***

- Many visually impaired people rely on browser speech and semantic tag helps to interpret page content clearly. The search engine needs to understand page content to rank and semantic tag helps.

3. **What is the use of data - attribute ?**
    
    It allows you to store extra information / data in the DOM. You can write valid HTML with embedded private data. You can easily access data attributes by using javascript. 
    
4. **What are the different ways to hide an Element using CSS?**
      display: none (Hides the content and doesn’t keep it in the DOM)
      visibility: hidden (It adds the element to the DOM and takes up space. 
       However, it is not visible to the user)
    

5.  ****What is the difference between Undefined and Undeclared?****

**Answer:** Undefined variable means a variable has been declared but it does not have a value.
An undeclared variable means that the variable does not exist in the program at all.

1. **Explain Implicit Binding with the help of code.** 

6.1 **Can we do this.something = “some data”)
     Answer :** [FreeCodeCamp Blog - Tapas A](https://www.freecodecamp.org/news/javascript-this-keyword-binding-rules/)  
                    [Medium Blog](https://javascript.plainenglish.io/how-well-do-you-know-this-ce4355bc9b)
****

1. **Convert a method into arrow function. How does this behave?**
    
    ```jsx
    var obj = {
      i: 10,
      b: () => console.log(this.i),
      c: function() {
        console.log(this.i);
      }
    }
    
    obj.b();
    obj.c();
    ```
    

1. **Explain what is hoisting with the help of code.**

2. **What is the difference between span and div?**
    
    **Answer:** div is a **block** element and span is an **inline** element.
    
    **Extra:** *It is illegal to put a block element inside the inline element. <div> can have a <p> tag and a <p> tag can have a <span>. However, <span> can't have a <div> or <p> tag inside.*
    
3. **Create an anchor tag. It should display the following behaviour:** 
    
    **Initially, the colour of the anchor text should be Green.** 
    
    **On hovering over the link, the colour should be Blue.**
    
    **If the link is clicked and the colour should turn Red.**
    
    **Answer:** Hint: Use pseudo-classes
    

1. **What does ‘Important’ in CSS mean?**
    
    **Answer:** The ‘important’ keyword indicates the highest precedence, and it overrides the cascaded property.
    
    ```jsx
    p {
    	color:blue !important;
    }
    
    #thing {
    	color: green;
    }
    
    <p id="thing">This will be BLUE.</p>
    ```
    
2. ****What is the difference between Function Declaration and Function Expression?****
    
    **Answer:** The main difference between a function expression and a function declaration is the ***function name,*** which can be omitted in function expressions to create anonymous functions
    

```jsx
// Function Declaration

********function getUserData(userID, userOrders) {
    // code logic
}

// Function Expression

var getCustomerData = function (customerId, customerOrders) {
    // code logic
}
// 1. It is stored in a variable assignment.
// 2. Function expressions load and execute only when 
// the program interpreter reaches the line of code.
// 3. Function expressions are not hoisted.
```

1. **How to invoke functions inside array?** 
    
    ```jsx
    const myArray = [ function logger() { console.log('Hello'); } ];
    
    myArray[0]();
    ```
    
2. **Explain Implicit binding with the help of code. What does this refer to in the sayHello function?**
    
    ```jsx
    var person = {
      firstName: "Hari",
      sayHi: function() {
        console.log("Hi " + this.firstName);
      },
      greet: {
        sayHello: function() {
          console.log("Hello " + this.firstName);  // Evaluates to Hello undefined as "this" keyword is undefined here, the closest parent object greet does not have a firstName attribute
        }  
    	}
    }
    ```
    
3. **Followup: How can you make it use the firstName property of the person object?**
    
    ```jsx
    // Using Call function to attach "this" keyword to person
    
    person.greet.sayHello.call(person) // Hello Hari
    ```
    
4. **What are the different function borrowing methods and the differences between them?**
    
    **Answer:** call, apply & bind
    

17. **What are the differences in each CSS property. Explain by writing some code**

- **Absolute:** To place an element exactly where you want to place it. absolute position is actually set relative to the element's parent. if no parent is available then the relative place to the page itself (it will default all the way back up to the element).
- **Relative:** "Relative to itself". Setting position: relative; on an element and no other positioning attributes, it will no effect on its positioning. It allows the use of z-index on the element and it limits the scope of absolutely positioned child elements. Any child element will be absolutely positioned within that block.
- **Fixed:** The element is positioned relative to the viewport or the browser window itself. viewport doesn't change if you scroll and hence the fixed element will stay right in the same position.
- **Static:** Static default for every single page element. The only reason you would ever set an element to position: static is to forcefully remove some positioning that got applied to an element outside of your control.
- **Sticky:** Sticky positioning is a hybrid of relative and fixed positioning. The element is treated as relative positioned until it crosses a specified threshold, at which point it is treated as fixed positioned.
1. **Can you tell some properties of flex ?** 
    
    flex-direction,justify-content,flex-wrap,align-items
    
2. **How can we center a div ?** 
    
    ```jsx
    // Without Flex
    
    .container{
    position: relative;
    }
    
    .child{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
    }
    
    // With Flex
    
    .center {
         display: flex;
         justify-content: center;
         align-items: center;
         height: 500px;
     }
    ```
    
3. **Do you know about sort method in Javascript ?**  
    
    ```jsx
    // What will be the output of the below?
    
    console.log([2,10,3].sort())
    
    // Answer:
    10,2,3
    // Reason if we don't give a callback then it converts 
    // the elements of the array into strings & then will sort
    ```
    
4. **Can you write your own reduce method ?** 
    
    ```jsx
    Array.prototype.myReduce = function (func, initialValue) {
      const array = this;
      let accumulator = initialValue;
      for (let i = 0; i < array.length; i++) {
        if (accumulator !== undefined) {
          accumulator = func(accumulator, array[i]);
        } else {
          accumulator = array[i];
        }
      }
      return accumulator;
    };
    ```
    
5. ****What are synthetic events in React ?**** 
    - Synthetic events combine the response of different browser's native events into one API, ensuring that the events are consistent across different browsers.
    - The application is consistent regardless of the browser it is running in. Here, **preventDefault** is a synthetic event.
6. **What will be the output of following code?**
- **Answer:** [0,1,2,3,4,5] The slice function copies all the elements of the array returning the new array. That's why arrA and arrB reference two completely different arrays.

```jsx
var arrA = [0,1,2,3,4,5];
var arrB = arrA.slice();
arrB[0]=42;
console.log(arrA)
```

24. **What is Diffing & Reconcilliation in react ?**
- Before updating the user interface, React uses a reconciliation algorithm to compare the new tree with the most recent tree to find out the most efficient way to update the user interface.

When diffing two trees, React first compares the two root elements. The behavior is different depending on the types of the root elements.

25. Elements Of Different Types

Whenever the root elements have different types, React will tear down the old tree and build the new tree from scratch. Going from `<a>` to `<img>`, or from `<Article>` to `<Comment>`, or from `<Button>` to `<div>` - any of those will lead to a full rebuild.

When tearing down a tree, old DOM nodes are destroyed. Component instances receive `componentWillUnmount()`. When building up a new tree, new DOM nodes are inserted into the DOM. Component instances receive `UNSAFE_componentWillMount()` and then `componentDidMount()`. Any state associated with the old tree is lost.

Any components below the root will also get unmounted and have their state destroyed. For example, when diffing:

`<div><Counter /></div><span><Counter /></span>`

This will destroy the old `Counter` and remount a new one.

> Note:
> 
> 
> These methods are considered legacy and you should [avoid them](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html) in new code:
> 
> - `UNSAFE_componentWillMount()`

26. DOM Elements Of The Same Type

When comparing two React DOM elements of the same type, React looks at the attributes of both, keeps the same underlying DOM node, and only updates the changed attributes. For example:

`<div className="before" title="stuff" /><div className="after" title="stuff" />`

By comparing these two elements, React knows to only modify the `className` on the underlying DOM node.

When updating `style`, React also knows to update only the properties that changed. For example:

`<div style={{color: 'red', fontWeight: 'bold'}} /><div style={{color: 'green', fontWeight: 'bold'}} />`

When converting between these two elements, React knows to only modify the `color` style, not the `fontWeight`.

After handling the DOM node, React then recurses on the children.

27. Component Elements Of The Same Type

When a component updates, the instance stays the same, so that state is maintained across renders. React updates the props of the underlying component instance to match the new element, and calls `UNSAFE_componentWillReceiveProps()`, `UNSAFE_componentWillUpdate()` and `componentDidUpdate()` on the underlying instance.

Next, the `render()` method is called and the diff algorithm recurses on the previous result and the new result.

28. **Write a function to create deep copy of an object.**

Solution:

```jsx
function copyObject(source) {
    var target = {};

    // Getting source object keys
    const keys = Object.keys(source);
    keys.forEach(key => {
        // Checking if current value is an object
        if (typeof source[key] === "object") {
            // Calling our function recursively for current value
            target[key] = copyObject(source[key]);
        } else {
            // Directly assigning the value
            target[key] = source[key];
        }
    });

    return target;
}
```

29**. What is callback hell? How to overcome this. Create a promise and show.**

Solution- Callback hell is a problem which we end up doing when we make multiple asynchronous one after the other, where we nest one callback of previous asynchronous operation with the next async operation. Example of a callback is given below.

```jsx
firstFunction(args, function(err, result) {
  secondFunction( result, function(err, result1) {
    thirdFunction(args, function(err) {
      // And so on…
    });
  });
});
```

One of the solution to above problem is to use Promises in Javascript:

```jsx
firstFunction(args){
	return function(err.result)
					.then(result => secondFunction(result))
					.then(resul1 => thirdFunction(result1)
					.then(err => err)
}
```

Promise is a Javascript object which produces a result sometime in the future after an asynchronous operation is finished, instead of immediately returning the final value, the asynchronous method returns a *promise* to supply the value at some point in the future.

Below a code snippet explaining how to create a Promise object.

```jsx
const promise = new Promise((resolve, reject) => {
	setTimeout(()=> resolve(1),2000)
})

promise
.then(result => console.log(result))
```

31**. What is prop drilling and how can you avoid it?**

Solution- Prop drilling refers to the process of sending props from a higher-level component to a lower-level component. Below is a code which showcases prop drilling:

```jsx
function C(prop) {
	return <h1>{prop.hello}</h1>;
}

function B(props) {
	return <C hello={props.hello} />;
}

export default function App() {
	return (
		<div className="App">
			<B hello={"hello"} />
		</div>
	);
}
```

But there are disadvantages of prop drilling, as we can see even though Component B doesn’t use the Prop , App component has to pass the prop **hello** to C via B, imagine this in a more complex Component structure, it becomes a lot of repeated code of passing props via another Component. Best way of solving this problem is through the Context API. 

The Context API follows the consume-provider architecture, where the Provider is the place where the values to be passed is transmitted globally to any child in the component tree. And the Consume is that component which consumes the values from the Context, in this way we can avoid the repeated and unnecessary passing of props via other Components.

Below is an example demonstrating Context:

```jsx
import { createContext, useContext } from "react";

const dataContext = createContext("");
const useData = () => useContext(dataContext);

function C() {
	const { hello } = useData();
	return <h1>{hello}</h1>;
}

function B() {
	return <C />;
}

export default function App() {
	return (
		<dataContext.Provider value={{ hello: "hello" }}>
			<div className="App">
				<B />
			</div>
		</dataContext.Provider>
	);
} 
```

1. **Explain the difference in flex and grid property.?**
    
    **Grid is made for a two-dimensional layout while Flexbox is for one dimensional layouts**
    
2. **What is the difference between inline, block and inline-block elements?**
    - ***Block Element:*** The block elements always start on a new line. They will also take space for an entire row or width. List of block elements are <div>, <p>. They can have margin and padding in all the sides, also can have width and height.
    - ***Inline Elements:*** Inline elements don't start on a new line, they appear on the same line as the content and tags beside them. Some examples of inline elements are <a>, <span> , <strong>, and <img> tags. Cannot have margin and padding at top or bottom also no height and width can be given
    - ***Inline Block Elements:*** Inline-block elements are similar to inline elements, except they can have padding and margins on all sides and set height and width values. It does not add line break
3. **Explain specificity and write the order of specificity for CSS rules from highest to lowest.**
    - ***Specificity*** is the means by which browsers decide which CSS property values are the most relevant to an element and, therefore, will be applied.
    - Order Of Specificty: Element Selector, Class Selector, Id Selector, Inline Styles and !important keyword !important having the highest specificity.
4. **Explain box sizing and its different types and explain with example, the width of container in each type of sizing?**
    - The **`box-sizing`** property sets how the total width and height of an element is calculated.
    - The `box-sizing` property can be used to adjust this behavior:
    - `content-box` gives you the default CSS box-sizing behavior. If you set an element's width to 100 pixels, then the element's content box will be 100 pixels wide, and the width of any border or padding will be added to the final rendered width, making the element wider than 100px.
    - `border-box` tells the browser to account for any border and padding in the values you specify for an element's width and height. If you set an element's width to 100 pixels, that 100 pixels will include any border or padding you added, and the content box will shrink to absorb that extra width.
5. **If a Script file is too large, how we can reduce the page loading time?**
    - This can be achieved using defer and async attributes present on the script tag. It only works when sec attribute is present.
    
    [async and differ](https://www.notion.so/00b4e56fba634b12a48c0e51dce05ad2)
    
6. **How would you implement the remember me login feature, so that even if you close the browser you are not logged out?** 
    - This can be achieved with the help of one of the web storage technologies that is local storage.
    - We can keep the token received from the server after the user logs in, into the local storage.
    - And whenever comes back from the same machine we can read the token from the local storage and if it exists then we can keep the user logged in.
7. **Explain the difference between Promise.all and Promise.allSettled with the help of code.**
    - `Promise.all` is rejected if at least **one of the elements are rejected.**
    - For example, we pass 2 promises that resolve and one promise that rejects immediately, then `Promise.all` will reject immediately.
    - It returns a promise that **always resolves**
     - after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise.
    - **Promise.allSettled** will never reject, it will resolve once all Promises in the array have either rejected or resolved.
    
    ![https://res.cloudinary.com/practicaldev/image/fetch/s--MEAe2zoD--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/gcpmjldpgbfc8xgqgh10.png](https://res.cloudinary.com/practicaldev/image/fetch/s--MEAe2zoD--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/gcpmjldpgbfc8xgqgh10.png)
    
    ![https://res.cloudinary.com/practicaldev/image/fetch/s--s2PC5oqi--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/brvijnemnpmm9qvauhvp.png](https://res.cloudinary.com/practicaldev/image/fetch/s--s2PC5oqi--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/brvijnemnpmm9qvauhvp.png)
    

39. **Describe the difference between a `cookie`, `sessionStorage` and `localStorage.`** 

- For most cases, we use the localStorage object if we want some data to be on the browser.
- If we want it on the server, then we use cookies,
- and the sessionStorage is used when we want to destroy the data whenever that specific tab gets closed or the season is closed by the user.

1. **What is a strict mode in javascript ?** 
    - Strict Mode is a new feature in ECMAScript 5 that allows you to place a program, or a function, in a “strict” operating context. This way it prevents certain actions from being taken and throws more exceptions. The literal expression `"use strict";` instructs the browser to use the javascript code in the Strict mode.
    - Strict mode is useful to write "secure" JavaScript by notifying "bad syntax" into real errors. For example, it eliminates accidentally creating a global variable by throwing an error and also throws an error for assignment to a non-writable property, a non-existing property, a non-existing variable, or a non-existing object.
2. **What is an arguments object? Show how it is useful.**
- The arguments object is an Array-like object accessible inside functions that contains the values of the arguments passed to that function.

```jsx
function sum() {
    var total = 0;
    for (var i = 0, len = arguments.length; i < len; ++i) {
        total += arguments[i];
    }
    return total;
}

sum(1, 2, 3) // returns 6
```

1. **What is useMemo Hook ?** 
    - It is a React hook that is used for caching CPU-Expensive functions.
    - Sometimes in a React app, a CPU-Expensive function gets called repeatedly due to re-renders of a component, which can lead to slow rendering.useMemo( ) hook can be used to cache such functions. By using useMemo( ), the CPU-Expensive function gets called only when it is needed.
2. **What are Pseudo elements and Pseudo classes? can you give an example?**

Ans: [https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)

**44. What is the Box model in CSS? Which CSS properties are a part of it?**

Ans: [Answer for Box Modal](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model). The properties are margin, padding, border and content. 

1. Create two inputs - one for grocery item and another for its price. Create an Add button to add it to the list. Show the list of added items below the form. and show total amount to be paid.
- Ans: [Solution](https://codesandbox.io/s/grocery-list-h5cogq?file=/src/App.js)

1. What are useEffect dependencies? what is empty [], no [], [someState]
- Ans: Dependencies are array items provided as the optional second argument of the `useEffect`call.
- Array values must be from the component scope (i.e., props, state, context, or values derived from the component).
- Whenever there is any change in the values of one of the dependencies of the array the `useEffect` is re executed.
- Empty([]) dependency array in useEffect means the effect is not dependent on anything, that means this effect is executed after every render cycle.
- [someState] this means that if the value of `somestate` differs between renders the useEffect is executed again.
1. Convert a method into arrow function. How does this behave?

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1bab9647-879d-4381-bc34-fcc712b23c78/Untitled.png)

1. **Explain what is hoisting with the help of code.**
- [https://arpanmondal.hashnode.dev/wth-in-javascript](https://arpanmondal.hashnode.dev/wth-in-javascript)

1. Create an anchor tag. It should display following behaviour: 
    1. Initially the colour of anchor text should be Green. 
    2. On hovering the link, colour should be blue.
    3. If the link is clicked and the colour should turn to red.
    
    [https://codesandbox.io/embed/anchor-color-changer-76tzwl?fontsize=14&hidenavigation=1&theme=dark](https://codesandbox.io/embed/anchor-color-changer-76tzwl?fontsize=14&hidenavigation=1&theme=dark)
    
1. Create a paragraph text which says “Hover on me”. When you hover on this text, show a tooltip text onto the right side of the paragraph element. Do this question using plain CSS.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e9511a36-5239-4c3f-ac3e-c2773101df51/Untitled.png)

- Solution:

[https://codesandbox.io/embed/kind-rui-xn5yjd?fontsize=14&hidenavigation=1&theme=dark](https://codesandbox.io/embed/kind-rui-xn5yjd?fontsize=14&hidenavigation=1&theme=dark)

1. What will be the output ? 

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f1554b38-aeff-4883-abd0-85b585b5c952/Untitled.png)

1. Why should we not update the state directly?
- Ans: When you directly update the state, it does not change this. state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value. **You will lose control of the state across all components**.
1. Fetch data from this api - "[https://jsonplaceholder.typicode.com/users/1](https://jsonplaceholder.typicode.com/users/1)" and show details on the view as shown below. Use React.js for this.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f16a6aef-b1f4-4885-bbd4-10ec27db469f/Untitled.png)

- Solution: [https://codepen.io/angelo_jin/pen/zYEWZdW](https://codepen.io/angelo_jin/pen/zYEWZdW)

1. Why you would use a `srcset` attribute in an image tag?
- Ans: srcset **allows you to define a list of different image resources along with size information so that browser can pick the most appropriate image based on the actual device's resolution.**
1. What are the different ways of emptying an array?

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4531770a-1a97-4ad2-bcc9-63c80a964086/Untitled.png)

1. What do you understand by an IIFE? show with the help of code.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2ced67ef-df73-46e1-b3b6-e9fa3e97848f/Untitled.png)

```jsx
//example 1

(function() {
		console.log("Wow!! IIFE...");
})();

//example 2

(function(dtst) {
    console.log(dtst.toLocaleTimeString());
})(new Date());
```

57. What is memoization? Explain with an example.

- Memoization is a programming technique which attempts to increase a function’s performance by caching its previously computed results.
- Each time a memoized function is called, its parameters are used to index the cache.
- If the data is present, then it can be returned, without executing the entire function. Otherwise the function is executed and then the result is added to the cache.

1. Differentiate between `:hover` and `:active` in CSS. Give an example.

- Hover: It is the state that occurs by putting your cursor over the button. You cannot see this state using the keyboard.
- Active: It is the state of an element that is active. For example, the state of interacting with the button.

1. What do you understand by pure functions in Javascript? 

    - A pure function is a function that always returns the same output if the same arguments are passed.
    - It does not depend on any state or data change during the program’s execution.
    - A pure function will always return a new reference and should not modify the original arguments inside the function.
    - For ex:
    
    ```jsx
    function pure(a){
    	return a*10
    }
    
    // The above function will always return the same value if the same value of
    // a is passed as an argument to the function
    ```
    
    But, look here
    
    ```jsx
    let a = 4;
    function impure(b){
    	return a * b
    }
    
    // Below function is impure as the output is dependent on an external variable a
    // and not solely depends on the argument passed.
    ```
    
2. WAP to create a time bomb. It should print 5, 4, 3, 2, 1, Bang!  
Explain how is it working. (Concept check: Event loop).
    
    Ans:
    
    ```jsx
    for(let i = 1; i <= 6 ; i++){
        let timer = setTimeout(()=>{
            if( i === 6){
                clearTimeout(timer)
                console.log("bang bang")
            }else{
                console.log(6 - i)    
            }
        }, 1000 * i)
    }
    ```
    

1. Create a modal in HTML/CSS and JS. On the click of a button, the modal should open, on clicking outside, it should close. 
(Checking for readiness to code, semantic HTML, modular functions).
    
    Ans:
    
    [https://codesandbox.io/embed/modal-component-ob0rmo?fontsize=14&hidenavigation=1&theme=dark](https://codesandbox.io/embed/modal-component-ob0rmo?fontsize=14&hidenavigation=1&theme=dark)
    

62. Explain how useEffect works and why we need a cleanup function in useEffect ? 

1. Zip two arrays together. 

```markdown
Array 1: [1, 2, 3, 4, 5]
Array 2: [-1, -2, -3, -4, -5]

Output: [1, 2, 3, 4, 5, -1, -2, -3, -4, -5]
```

Ans: 

```jsx
const res = [...array1, ...array2]
```

1. WAP to create the loop button of Spotify. It will have 3 states: 
- `off, looping playlist, and loop this song`. 
- With the click of the button, the states will toggle in the order listed above.

[https://codesandbox.io/embed/spotify-button-d0nlmc?fontsize=14&hidenavigation=1&theme=dark](https://codesandbox.io/embed/spotify-button-d0nlmc?fontsize=14&hidenavigation=1&theme=dark)

1. What are React fragments? How do we write a fragment and why use it?

- Fragments let you group a list of children without adding extra nodes to the DOM.

```jsx
render() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  );
}

// You can also use 

<>

</>

//instead of  

<React.Fragment>

</React.Fragment>
```

1. Create a text editor, which will save its content to local storage by clicking the save button. But if the user tries to close the tab or the window without saving, it should show a prompt saying: “Your data may be lost! save now!”

[https://codesandbox.io/embed/local-storage-8t14qe?fontsize=14&hidenavigation=1&theme=dark](https://codesandbox.io/embed/local-storage-8t14qe?fontsize=14&hidenavigation=1&theme=dark)

1. Convert a promise hell into async-await :

```tsx
firstFunction(args, function() {
  secondFunction(args, function() {
    thirdFunction(args, function() {
      // And so on…
    });
  });
});

// ans :

return firstFunction(args)
.then(res => secondFunction(res))
.then(res => thirdFunction(res))
```

1. Suppose there is a function that takes an object and mutates it and a new function that also takes an object and returns a new one. 
Which one is pure and why?
    - The second function is a pure function, as it doesn’t change the original reference of the object that is passed as parameter and in tern returns a new reference.
2. Write polyfill for `.forEach` 
    
     
    
    ```jsx
    Array.prototype.myForEach = function(callback){
    	for(let i = 0; i < this.length ; i++){
    		callback(this[i], i, this)
    	}
    }
    ```
    
3. Why are we able to do method chaining in `.map` and not in `.forEach()`?
    - We are able to do method chaining in case of `.map` because map method returns a new array and we can apply other array methods on this returned array, but on the other hand `forEach` method doesn’t return anything(undefined), that’s why we can’t chain any more array methods to it.
4. Explain Closure in Javascript 

    - A function bind together with its lexical environment is termed a closures.
    - A closure is the combination of a function and the lexical environment within which that function was declared.
    - A closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
    - There are two main disadvantages of overusing closures:
    1. **The variables declared inside a closure are not garbage collected**
    2. Too many closures can slow down your application. This is actually caused by duplication of code in the memory.
    
    ```jsx
    function a(){
    	let x = 2;
    	function b(){
    		console.log(x)	
    	}
    	b()
    }
    a()
    
    ```
    
    - Here the function b does not have access to `x` in its local lexical environment, so now it tries to find x in its outer lexical environment and finds it, so function b could find x because it forms closures with its outer lexical scope variables.
    - (put a debugger and show in the browser how the closure is formed to the interviewer for better clarification)
5. Explain the concept of **debounce** 
    - Debouncing is a programming practice that lets us improve performance of the apps by waiting until a certain amount of time has passed before triggering an event. 
    - When the user *stops* triggering the event, our code will run.
    
    In simple terms it means delayed invocation of a function.
    
    - Let’s take an example where debouncing can best be applied.
    - For example we have a search bar where onchange of user input we make an API call to get suggestions according to the substring typed currently.
    - But if we do API calls on every letter typed, that would lead to unnecessary API calls, and bottleneck to get back the response in time.
    - And as we know different user have different typing speed, so what we do is just wait for some delay in typing adjacent letters before making any API call, this reduces the no. of API calls and in turn increases the performance.
    - Below is a code snippet of a simple debounce function, where we delay the function invocation.
    
    ```jsx
    function debounce = (callback, delay){
    
    	let timerId = null
    
    	return (...args) => {
    		clearTimeout(timerId)
    		timerId = setTimeout(()=> callback.apply(null, agrs), delay)
    	}
    }
    
    // Now if we want to get suggestion on user Input, 
    // instead of directly passing the
    // getSuggestion function to the input change handler, 
    // we can pass it via this debounce function.
    
    ```
    
6. Read an array of numbers. Print each number with a delay. - use let and var separately and explain the difference in outputs.
    
    
7. What is specificity in context of CSS rules? which CSS rule has highest and lowest specificity.
    - [https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)
8. Print 1, 2, 3 with delay of 1, 2, 3 second.

```jsx
for(let i = 1; i < 4; i++){
    setTimeout(()=>console.log(i), i*1000)
}
```

 75. Remove item from array & add another item at its place then advanced this question step by step.

```jsx
1. [a,b,x,y] => remove x & add p => [a,b,p,y]
2. [a,b,x,y] => remove x & add p,q => [a,b,p,q,y]
3. [a,b,x,y]=> remove b,x & add p,q,r => [a,p,q,r,y]

```

1. What is the difference between deep copy and shallow copy ? 

2. Create a deep copy of an object . 

    
    ```jsx
    function copyObject(source) {
    
    }
    
    // Usage
    const source = {
        a: 10,
        b: 20,
        c: {
            d: 30
        }
    }
    
    const target = copyObject(source);
    ```
    
    - [https://dev.to/amitkhonde/javascript-interviews-create-a-deep-copy-of-an-object-4pje](https://dev.to/amitkhonde/javascript-interviews-create-a-deep-copy-of-an-object-4pje)
    
3. What will be the output of the following code ? 

    
    ```jsx
    var arrA = [0,1,2,3,4,5];
    
    var arrB = arrA.slice();
    
    arrB[0]=42;
    
    console.log(arrA)
    
    Answer: [0,1,2,3,4,5]
    ```
    
    - The slice function copies all the elements of the array returning the new array. That's why arrA and arrB reference two completely different arrays.
    
4. What will be the output ?

    
    ```jsx
    var salary = "1000";
    
    (function () {
      console.log("Original salary was " + salary);
    
      var salary = "5000";
    
      console.log("My New Salary " + salary);
    })();
    ```
    
    - The code above will output: undefined, 5000 because of hoisting.
    - In the code presented above, you might be expecting salary to retain it values from outer scope until the point that salary was re-declared in the inner scope. But due to hoisting salary value was undefined instead.
    - To understand it better have a look of the following code, here salary variable is hoisted and declared at the top in function scope. When we print its value using console.log the result is undefined. Afterwards the variable is redeclared and the new value "5000" is assigned to it.
    
5. What is an arguments object? Show how it is useful****.**** 

- The arguments object is an Array-like object accessible inside functions that contains the values of the arguments passed to that function.

```jsx
function sum() {
    var total = 0;
    for (var i = 0, len = arguments.length; i < len; ++i) {
        total += arguments[i];
    }
    return total;
}

sum(1, 2, 3) // returns 6
```

1. What will be the output?

    
    ```jsx
    const arrowFunc = () => arguments.length;
    
    console.log(arrowFunc(1, 2, 3));
    
    Answer:
    
    // ReferenceError: arguments is not defined
    // Arrow functions do not have an arguments, super, this, or new.target bindings.
    ```
    

1. Certainly! Here's an example of using `.reduce()` to find the sum of all the elements in an array:

```tsx
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {

  return accumulator + currentValue;

}, 0);

console.log(sum); // Output: 15
```

82.1 Write a custom .reduce().

- [https://dev.to/amitkhonde/javascript-interview-write-a-custom-reduce-function-2cil](https://dev.to/amitkhonde/javascript-interview-write-a-custom-reduce-function-2cil)

83. Given an array of objects, print them one by one after a delay of 4 secs.

 let arr = [{x:2}, {x:3}, {x:4}]. Explain it.

```tsx
for(let obj in arr) {
 setTimeout(() => { console.log(`arr`, arr[obj])},1000* obj)
}
```

1. Is there a way to get all the values of an object directly in an array ? 

- Answer : Object.values()

2. What is the difference between Object.values() and Object.entries() ? 
    
    
    ```jsx
    const object = {
       a: 'Hello',
       b: 100
     };
    
    Object.values(object)
    // ['Hello', 100]
    
    Object.entries(object)
    // [['a', 'Hello']['b', 100]]
    ```
    
3. Write a program to capitalize first letter of a given string.
    
    
    ```jsx
    function capitalizeFirstLetter(string) {
    
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    ```
    
4. What is a promise? Create a promise and explain. 

    - **`Promise`**is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason.
    
    ```tsx
    const myPromise = new Promise((resolve, reject) => {
    
      setTimeout(() => {
        resolve('foo');
      }, 300);
    
    });
    ```
    
5. What is event bubbling ? 

    - Event bubbling is a type of event propagation where the event first triggers on the innermost target element, and then successively triggers on the ancestors (parents) of the target element in the same nesting hierarchy till it reaches the outermost DOM element.
    
6. What is event capturing ? 

    
    **Answer:** Event capturing is a type of event propagation where the outermost element first capture the event, and then successively triggers on the descendants (children) of the target element in the same nesting hierarchy till it reaches the innermost DOM element.
    
7. What is the purpose of the race method in promise ? 

    - Promise.race() method will return the promise instance which is firstly resolved or rejected. Let's take an example of race() method where promise2 is resolved first.
    
    ```jsx
    
    var promise1 = new Promise(function(resolve, reject) {
        setTimeout(resolve, 500, 'one');
    });
    var promise2 = new Promise(function(resolve, reject) {
        setTimeout(resolve, 100, 'two');
    });
    
    Promise.race([promise1, promise2]).then(function(value) {
      console.log(value); 
    });
    
    // "two" 
    
    // Both promises will resolve, but promise2 is faster
    // because of 100 milisecond of timeout
    
    ```
    
8. What is this operator? and what will be the output?

    
    ```jsx
    console.log(false ?? true);
    console.log(undefined ?? true); 
    
    Answer: nullish coalescing operator.
    
    It is a logical operator that returns its right-hand side operand 
    when its left-hand side operand is null or undefined, 
    and otherwise returns its left-hand side operand. 
    
    This can be contrasted with the logical OR (||) operator, 
    which returns the right-hand side operand 
    if the left operand is any falsy value, not only null or undefined.
    
    // false
    // true
    ```
    

1. Have you ever used try/catch? What is it used for?

    - Promise chains are great at error handling. When a promise rejects, the control jumps to the closest rejection handler. That’s very convenient in practice.
    
    ```tsx
    fetch('https://no-such-server.blabla') 
    // rejects
    
      .then(response => response.json())
    
      .catch(err => alert(err))
    ```
    
2. Explain the z-index property.

    - The **`z-index`** CSS property sets the z-order of a [positioned](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
    element and its descendants or flex items.
    - Overlapping elements with a larger z-index cover those with a smaller one.

1. What is data binding and Explain 2 way data binding in Reactjs ? 

- Data binding is a general technique that binds data sources from the provider and consumer together and synchronizes them. 
- The connection between the data to be displayed in the view and the component’s logic is called data binding in ReactJS.
- Refer this : [https://reactgo.com/two-way-data-binding-react/](https://reactgo.com/two-way-data-binding-react/)
1. Explain higher order component in react with example

- [https://reactjs.org/docs/higher-order-components.html#gatsby-focus-wrapper](https://reactjs.org/docs/higher-order-components.html#gatsby-focus-wrapper)
1. Tell me about the lifecycle methods in Reactjs 
    - Basically react components goes through 3 lifecycle phases and each phase has their special methods that gets invoked they are:
    - Mounting: The phase when the component gets rendered for the first time on to the DOM
        - Methods: Constructor → getDerivedStateFromProps → render → componentDidMount
    - Updating: When the component view updates due to state or props change
        - Methods: getDerivedStateFromProps → shouldComponentUpdate → render → getSnapshotBeforeUpdate → componentDidUpdate
    - Unmounting: The phase when the component is removed from the DOM.
        - Methods: componentWillUnmount
    
2. What is the difference between Authentication and Authorization?

    1. Authentication is when user cannot enter the app without crednetials
    2. Authorization is when, user has entered the app but is not allowed to do certain private actions.
    
3. What are different HTTP methods and what do they return as status?

    1. [https://developer.mozilla.org/en-US/docs/Web/HTTP/Status](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
    
4. What things can you store in local Storage?
    1. [https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
    2. We can store things like theme, token into local storage .
    
5. What is Code Splitting or Bundling? Do you know about Lazy Loading?

    - Bundling is great, but as your app grows, your bundle will grow too. Especially if you are including large third-party libraries. You need to keep an eye on the code you are including in your bundle so that you don’t accidentally make it so large that your app takes a long time to load.
    - To avoid winding up with a large bundle, it’s good to get ahead of the problem and start “splitting” your bundle.
    - Code-Splitting is a feature supported by bundlers like [Webpack](https://webpack.js.org/guides/code-splitting/), [Rollup](https://rollupjs.org/guide/en/#code-splitting) and Browserify (via [factor-bundle](https://github.com/browserify/factor-bundle)) which can create multiple bundles that can be dynamically loaded at runtime.
    - Code-splitting your app can help you “lazy-load” just the things that are currently needed by the user.
    - [https://reactjs.org/docs/code-splitting.html](https://reactjs.org/docs/code-splitting.html)
    
6. Do you know about regex? How would you validate an email ? 

    
    ```tsx
    "/^([a-z0-9.-]+)@([a-z0-9-]+).([a-z{2,4}])([a-z{2,4}])?$/"
    ```
    
7. There is an error called `Too many re-renders` in react? Have faced this error? Why does it occur?
    1. Happens when we directly call function on onClick.
    2. When we setState during render itself.
     
8. What is CORS ? 
    1. [https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
    
9. Do you know batch updates in React ? Can you give an example ?

```tsx
import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 1);
        setNumber(number + 1);
        setNumber(number + 1);
      }}>+3</button>
    </>
  )
}
// React will batch updates and the output will be 1 only
```

1. Explain event loop, and what are microtasks and macrotasks:
    - [https://javascript.info/event-loop](https://javascript.info/event-loop)
2. Explain web storage in HTML. State the types of storage.

This web storage helps in storing some of the static data in the local storage of the browser so that we do not need to fetch it from the server every time we need it. 
There is a size limit based on different browsers. 
This helps in decreasing the load time and a smooth user experience. 
There are two types of web storage that are used to store data locally in HTML5: 

• **Local Storage** - This helps in storing data that will be retained even though the user reopens the browser. It is stored for each webapp on different browsers.

• **Session Storage** - This is used for one session only. After the user closes the browser this gets deleted.

1. What does Cascade meaning in CSS? (ii) How is the priority determined for setting the styles?

Ans: The cascade is the algorithm for solving conflicts where multiple CSS rules apply to an HTML element. 

(ii)- Priority 
1. User agent declarations 
2. User declarations 
3. Author declarations 
4. Author !important declarations 
5. User !important declarations.

1. Explain the difference between localstorage, and session storage

- [https://javascript.info/localstorage](https://javascript.info/localstorage) 

2. ****In JavaScript, what is the difference between `var example = 1` and `example = 1`?**

 `var example = 1:` 

    - Allowed in 'strict mode'.
    - The var statement declares a function-scoped or globally-scoped variable, optionally initializing it to a value.
    - Variables declared using var inside a { } block can be accessed from outside the block.
    - Variables defined using var inside a function are not accessible (visible) from outside the function.
    - Duplicate variable declarations using var will not trigger an error, even in strict mode, and the variable will not lose its value unless another assignment is performed.
    
    `example = 1`
    
    - Not allowed in 'strict mode'.
    - Undeclared Variables like: x = 1 is accessible in: (Block scope - Function scope - Global scope)
    - Outside of strict mode, however, if you assign a value to a name that has not been declared with let, const, or var, you'll end up creating a new global variable. It will be global no matter how deeply nested within functions and blocks your code is, which is almost certainly not what you want, is bug-prone, and is one of the best reasons for using strict mode!
    - Global variables created in this accidental way are like global variables declared with var: they define properties of the global object.
    - Unlike the properties defined by proper var declarations, these properties can be deleted with the delete operator.
    - Not recommended.

1. What is difference between null vs undefined? 

    
    [Untitled](https://www.notion.so/ff742cef8e6d440098f5fcec955732f8)
    

1. What is the difference between Element and Component in React ? 

    - **React Element**
    - It is a simple object that describes a DOM node and its attributes or properties. It is an immutable description object and you can not apply any methods on it.
        
        ```tsx
        const element = <h1>React Element Example!</h1>;
        ReactDOM.render(element, document.getElementById('app'));
        ```
        
    - **React Component**
    - It is a function or class that accepts an input and returns a React element. It has to keep references to its DOM nodes and to the instances of the child components.
        
        ```tsx
        function Message() {
          return <h2>React Component Example!</h2>;
        }
        ReactDOM.render(<Message />, document.getElementById('app'));
        ```
        

1. Create a promise using Promise constructor 

```tsx
const fakeFetchPromise = (name, rejection) => { 

 return new Promise((resolve, reject) => { 

  setTimeout(() => { 
     rejection 
     ? reject(your are not welcomed here ${name}) 
      : resolve(welcome to the world ${name}); 
   }, 3500);

 });

};
```

1. What is a z-index? How does it work? Given this code snippet, write CSS such that gold box appears at the top.

- The **`z-index`** CSS property sets the z-order of a [positioned](https://developer.mozilla.org/en-US/docs/Web/CSS/position) element and its descendants or flex items.
- Overlapping elements with a larger z-index cover those with a smaller one.

```jsx
<div class="wrapper">
  <div class="dashed-box">Dashed box</div>
  <div class="gold-box">Gold box</div>
  <div class="green-box">Green box</div>
</div>
```

1. Guess the Output

```tsx
const arr = [1,2,3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr);

Ans: [1,3,2]
```

1. Write a function that takes a value and array which defaults to an empty array. Push the value to the array and return the array. Call the function 2 times and guess the O/P.

```tsx
function append(value, array = []) {
  array.push(value)
  return array
}

append(1)  // [1]
append(2)  // [2], not [1, 2]
```

1. Is it possible to do such things ?

```tsx
function greet(name, greeting, message = greeting + ' ' + name) {
  return [name, greeting, message]
}

greet('David', 'Hi')                     // ["David", "Hi", "Hi David"]
greet('David', 'Hi', 'Happy Birthday!')  // ["David", "Hi", "Happy Birthday!"]
```

124. Explain useEffect hook and its dependencies.

- [https://reactjs.org/docs/hooks-effect.html](https://reactjs.org/docs/hooks-effect.html)
1. What are event bubbling and event capturing?

    1. [https://javascript.info/bubbling-and-capturing](https://javascript.info/bubbling-and-capturing)
    
2. What is the difference between importing a style sheet via URL in CSS and link element in HTML?

    - Better to use link element
    
     [https://www.stevesouders.com/blog/2009/04/09/dont-use-import/](https://www.stevesouders.com/blog/2009/04/09/dont-use-import/)
    
3. Explain Rules of Hooks in React.

    - [https://reactjs.org/docs/hooks-rules.html](https://reactjs.org/docs/hooks-rules.html)
