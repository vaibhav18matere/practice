function carteSianProduct(arr1, arr2) {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result.push(arr1[i], arr2[j]);
    }
  }
  return result;
}

const arr1 = [1, 2];
const arr2 = [3, 4, 5];

console.log(carteSianProduct(arr1, arr2));
// output :  [ 1, 3, 1, 4, 1, 5, 2, 3, 2, 4, 2, 5]

// Time complexity - it's not quadratic - O(n^2) because both array is having different length
//  arr1 is length m and arr2 is length n so,
// BigO - O(m.n)
