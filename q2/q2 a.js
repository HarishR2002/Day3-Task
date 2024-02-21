//Print odd numbers in an array

let printOddNumbers = (arr) => {
    return arr.filter((num) => num % 2 !== 0);
  };
  
  let oddNumbers = printOddNumbers([1, 2, 3, 4, 5]);
  console.log(oddNumbers);
  