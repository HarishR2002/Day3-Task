// Convert all the strings to title caps in a string array

// Anonymous function
let convertToTitleCaps = function(arr) {
    return arr.map(function(str) {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
  };
  
  // IIFE
  let titleCaps = (function(arr) {
    return arr.map(function(str) {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
  })(["apple", "banana", "cherry"]);
  console.log(titleCaps);
  