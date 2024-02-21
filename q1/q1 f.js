//Return median of two sorted arrays of the same size

// Anonymous function
let findMedianSortedArrays = function(nums1, nums2) {
    let mergedArray = nums1.concat(nums2).sort((a, b) => a - b);
    let mid = Math.floor(mergedArray.length / 2);
    if (mergedArray.length % 2 === 0) {
      return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
    } else {
      return mergedArray[mid];
    }
  };
  
  // IIFE
  let median = (function(nums1, nums2) {
    let mergedArray = nums1.concat(nums2).sort((a, b) => a - b);
    let mid = Math.floor(mergedArray.length / 2);
    if (mergedArray.length % 2 === 0) {
      return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
    } else {
      return mergedArray[mid];
    }
  })([1, 3, 5], [2, 4, 6]);
  console.log(median);
  