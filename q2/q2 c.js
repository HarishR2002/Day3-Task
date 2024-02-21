//Sum of all numbers in an array

let sumArray = (arr) => {
    return arr.reduce((acc, curr) => {
      return acc + curr;
    }, 0);
  };
  
  let sum = sumArray([1, 2, 3, 4, 5]);
  console.log(sum);
  