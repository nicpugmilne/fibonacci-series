function fibonacci(num) {
  // type your code here
  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  }
  let fibNums = [];

  for (let i = 0; i <= num; i++) {
    if (i === 0) {
      fibNums.push(0);
    } else if (i === 1) {
      fibNums.push(1);
    } else {
      let x = fibNums[fibNums.length - 2];
      let y = fibNums[fibNums.length - 1];
      fibNums.push(x + y);
    }
  }
  return fibNums[fibNums.length - 1];
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
//Create an empty array to hold fibonacci numbers
// Until the array length is equal to argument passed to fibonacci function, continue adding numbers
// If length of array is less than 2 do
// If number is 0, return 0
// If number is 1, return 1
// If number is 2 or greater, then new number should be equal to the last two numbers in the array
// This can be found by looking for the values at indexes array.length - 1, and array.length -2
// When array length is equal to argument, return value of last element

// And a written explanation of your solution
