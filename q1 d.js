//Return all the prime numbers in an array

// Anonymous function
let getPrimeNumbers = function(arr) {
    return arr.filter(function(num) {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return num > 1;
    });
  };
  
  // IIFE
  let primes = (function(arr) {
    return arr.filter(function(num) {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return num > 1;
    });
  })([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  console.log(primes);
  