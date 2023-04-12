function getFibonacci(n) {
     const initialFibArr = [0, 1];
     for (let i = 2; i < n; i++){
          initialFibArr[i] = initialFibArr[i - 1] + initialFibArr[i - 2];
     }
     return initialFibArr;
}

console.log(getFibonacci(2));
console.log(getFibonacci(3));
console.log(getFibonacci(5));
console.log(getFibonacci(8));