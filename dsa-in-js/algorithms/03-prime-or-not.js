function primeOrNot(numberIp) {
  if (numberIp < 2) {
    return false;
  }
  for (let i = 2; i < numberIp; i++) {
    if (numberIp % i === 0) {
      return false;
    }
  }
  return true;
}
// BigO, Time complexity => O(n)

console.log(checkPrime(1)); // 1 is neither prime nor composite number
console.log(checkPrime(2)); 
console.log(checkPrime(3));
console.log(checkPrime(4));
console.log(checkPrime(7));

// Approach 2 - Optimal solution 

function checkPrime(numberIp) {
  if (numberIp < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(numberIp); i++) {
    if (numberIp % i === 0) {
      return false;
    }
  }
  return true;
}

console.log("using second appraoch 👇🏻👇🏻");

// BigO, Time complexity => O(sqrt(n));
// Now we don't need to loop through entire n times but sqrt. of n times..

console.log(checkPrime(1)); // 1 is neither prime nor composite number
console.log(checkPrime(2));
console.log(checkPrime(3));
console.log(checkPrime(4));
console.log(checkPrime(7));
