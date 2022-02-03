function isPalindrome(word) {
  // Write your algorithm here
  let reverse = word.split('').reverse().join('')
  return (word === reverse ? true : false)
}

/* 
  Add your pseudocode here
  
  initialize function, receiving a string as a single argument

  declare variable and assign the argument with method chain of
  split() to convert into an array, reverse() to reverse the array,
  and then join() to conert the array back into a string

  return word equals join? return true or flase
*/

/*
  Add written explanation of your solution here

  My function takes in a string as an argument, uses the
  split() method to convert the string into an array, then
  the reverse() method to reverse the array, then the join()
  method to convert the reverse array back into a string.
  
  Next, I use the ternery operator to compare the initial
  argument string with the reversed string and return true
  or false accordingly.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log('Expecting: true')
  console.log("=>", isPalindrome("level"))

  console.log("");

  console.log('Expecting: false')
  console.log("=>", isPalindrome("boy"))

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
