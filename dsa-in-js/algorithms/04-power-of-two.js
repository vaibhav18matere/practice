// given positive integer n , determine if the number is a power of 2 or not.
// an integer is power of two if there exists an integer 'x' such that 'n' === 2^x

// isPowerOfTwo(1) =  true bcz 2^0=1
// isPowerOfTwo(2) =  true bcz 2^1=2
// isPowerOfTwo(5) =  false


function isPowerOfTwo(n) {
     if (n < 1) {
          return false
     }
     while (n > 1) {
          if (n % 2 !== 0) {
               return false
          }
          n=n/2
     }
     return true
}
// Time complexity => bigO => O(logn)

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(8));


// Approach 2 - Optimal solution

function checkIsPowerOfTwo(n) {
     if (n < 1) {
          return false
     }
     return (n & (n - 1)) === 0
     //bitwise ower of 2
}
// Time complexity => bigO => O(1)

console.log(checkIsPowerOfTwo(1));
console.log(checkIsPowerOfTwo(2));
console.log(checkIsPowerOfTwo(5));
console.log(checkIsPowerOfTwo(8));
