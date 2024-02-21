//Return all the palindromes in an array

// Anonymous function
let getPalindromes = function(arr) {
    return arr.filter(function(str) {
      return str === str.split("").reverse().join("");
    });
  };
  
  // IIFE
  let palindromes = (function(arr) {
    return arr.filter(function(str) {
      return str === str.split("").reverse().join("");
    });
  })(["madam", "apple", "banana", "level"]);
  console.log(palindromes);
  