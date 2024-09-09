// Write a function createCounter. 
// It should accept an initial integer init.
// It should return an object with three functions.

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

var createCounter = function (init) {
     let counter = init;
     const increment = () => ++counter;
     // writting Es6 default return type removing {} and return keyword

     const decrement = () => --counter;

     const reset = () => {
          counter = init; // because of hoisting
          return counter;
     };

     return {
          increment,
          decrement,
          reset
     }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */