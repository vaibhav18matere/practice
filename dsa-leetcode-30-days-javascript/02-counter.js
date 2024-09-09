// Given an integer n, return a counter function.
// This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called(n, n + 1, n + 2, etc).

// Example 1:

// Input:
// n = 10
// ["call", "call", "call"]
// Output: [10, 11, 12]
// Explanation:
// counter() = 10 // The first time counter() is called, it returns n.
// counter() = 11 // Returns 1 more than the previous time.
// counter() = 12 // Returns 1 more than the previous time.
// Example 2:

// Input:
// n = -2
// ["call", "call", "call", "call", "call"]
// Output: [-2, -1, 0, 1, 2]
// Explanation: counter() initially returns - 2. Then increases after each sebsequent call.


var createCounter = function (init) {
     let counter = init;
     function increment() {
          return ++counter;
     };
     function decrement() {
          return --counter;
     };
     function reset() {
          counter = init; // because of hoisting
          return counter;
     };

     return {
          increment: increment,
          decrement: decrement,
          reset: reset
     }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */