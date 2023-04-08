// It caches the result for the given input so that ;
// the subsequent calls for the same inputs will be faster.

// Memoization is an optimization technique to avoid re-computation.
// We cache the result for the given input and return it
// for subsequent call of the same input rather than
// performing the expensive computation again.

// Only works for pure functions (which has no side effects).

const memoize = function (fn) {
  const cache = {};
  return function () {
    //arg as key to store the result
    const KEY = JSON.stringify(arguments);

    //if the result is present for the given key return it
    if (cache[KEY]) {
      return cache[KEY];
    }

    //else compute and store the result and return the result
    const evaluatedValue = fn(...arguments);
    cache[KEY] = evaluatedValue;
    return evaluatedValue;
  };
};

// Input:
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return factorial(n - 1) * n;
}

const memoizedFactorial = memoize(factorial);
let a = memoizedFactorial(100); // slow
console.log(a);
let b = memoizedFactorial(100); // faster
console.log(b);

// Output:
// 9.33262154439441e+157 // slow
// 9.33262154439441e+157 // faster
