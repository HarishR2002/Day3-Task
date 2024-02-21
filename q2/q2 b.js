//Convert all the strings to title caps in a string array

let convertToTitleCaps = (arr) => {
    return arr.map((str) => {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
  };
  
  let titleCaps = convertToTitleCaps(["apple", "banana", "cherry"]);
  console.log(titleCaps);
  