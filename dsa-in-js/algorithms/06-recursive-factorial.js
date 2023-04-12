function recursiveFActorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * recursiveFActorial(n - 1);
}

console.log(recursiveFActorial(5));
console.log(recursiveFActorial(0));
console.log(recursiveFActorial(6));

// Time complexity => Big O => O(n)
