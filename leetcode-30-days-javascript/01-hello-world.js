// 1. Write a function createHelloWorld 
// It should return a new function that always returns "Hello World".


var createHelloWorld = function () {

     return function (...args) {
          return "Hello World"
     }
};

// APPROACH 2

// var createHelloWorld = function () {
//      return () => "Hello World";
// };

// APPROACH 3

// var createHelloWorld = function () {
//      return (...args) => "Hello World";
// };

const f = createHelloWorld();
f();

// Topics to explore :

// https://leetcode.com/problems/create-hello-world-function/editorial/?envType=study-plan-v2&envId=30-days-of-javascript

// Function Syntax
// Anonymous Function
// Immediately Invoked Function Expression (IIFE)
// Functions Within Functions
// Function Hoisting
// Arrow Syntax
// Omit Return
// Rest Arguments
// Higher Order Function (HOF)