//Remove duplicates from an array

// Anonymous function
let removeDuplicates = function(arr) {
    return arr.filter(function(item, index) {
      return arr.indexOf(item) === index;
    });
  };
  
  // IIFE
  let uniqueArray = (function(arr) {
    return arr.filter(function(item, index) {
      return arr.indexOf(item) === index;
    });
  })([1, 2, 2, 3, 4, 4, 5]);
  console.log(uniqueArray);
  