// currying function - based on closure.

// In currying we return a function for each function invoked which excepts next argument inline.
// With the help of currying, we can transform a function with multiple arguments into a sequence of nesting functions.

// In simple words,
// we can pass functions as arguments (callbacks) and return functions without any side effects

let curryFunc = () => {
  let total = 0;

  return function (num = 0) {
    total = num + total;
    return total;
  };
};

let sumOf = curryFunc();
console.log(sumOf(2));
console.log(sumOf(0));
console.log(sumOf(8));
console.log(sumOf(5));
console.log(sumOf(2));

//default is 0, if you don't pass anything it will take as 0.
