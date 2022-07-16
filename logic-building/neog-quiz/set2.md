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