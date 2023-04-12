function recursionFibonacci(n) {
  if (n < 2) {
    return n;
  }
  return recursionFibonacci(n - 1) + recursionFibonacci(n - 2);
}

console.log(recursionFibonacci(0));
console.log(recursionFibonacci(1));
console.log(recursionFibonacci(6));

// Time complexity => bigO => 2^n

// The performave of this code is terrible so not recommanded to use to solve fibonacci problem using recursion.
// use iterative approach instead.
