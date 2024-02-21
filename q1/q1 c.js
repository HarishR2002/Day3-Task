//Sum of all numbers in an array

// Anonymous function
let sumArray = function(arr) {
    return arr.reduce(function(acc, curr) {
      return acc + curr;
    }, 0);
  };
  
  // IIFE
  let sum = (function(arr) {
    return arr.reduce(function(acc, curr) {
      return acc + curr;
    }, 0);
  })([1, 2, 3, 4, 5]);
  console.log(sum);
  