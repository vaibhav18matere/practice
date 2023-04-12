function factorialOf(n) {
     let factorial = 1;
     for (let i = 2; i <= n; i++){
          factorial = factorial * i;
     }
     return factorial;
}

console.log(factorialOf(0));
console.log(factorialOf(1)); // factorial of 0 and 1 is always 1
console.log(factorialOf(3)); // 3*2*1=6
console.log(factorialOf(5)); // 5*4*3*2*1=120