//Return all the palindromes in an array


let getPalindromes = (arr) => {
    return arr.filter((str) => {
      return str === str.split("").reverse().join("");
    });
  };
  
  let palindromes = getPalindromes(["madam", "apple", "banana", "level"]);
  console.log(palindromes);
  