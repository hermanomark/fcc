// Introduction to Basic Algorithm Scripting
// A computer algorithm is a sequence of steps that is followed to achieve a particular outcome. To write an algorithm, you must first understand a problem, and then solve it with coding.

// To make solving problems eaiser, it can be helpful to break them down into many chuncks. Then, each chunk can be solved one by one. For example, if you are building a calculator, don't try to solve the problem as a whole. First, consider how to get inputs. Then, determine each arithematic operation one by one. Finally, display the results.

// In this section we will learn to solve basic algorithm problems using JavaScript. This will help you improve your problem solving skills and prepare you to later solve more complex problems.

// Hint
// If you get stuck, try using console.log() to log variable values to the console. This will help to debug problems.

// Basic Algorithm Scripting: Convert Celsius to Fahrenheit

// The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

// Q. Convert celsius to fahrenheit

// A.
function convertToF(celsius) {
  let fahrenheit;
  fahrenheit = celsius * 9/5 + 32;
  return fahrenheit;
}

convertToF(30);
// => 86
// -----------------------------------------------
// Basic Algorithm Scripting: Reverse a String
// Reverse the provided string.

// You may need to turn the string into an array before you can reverse it.

// Your result must be a string.

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

const reverseString = (str) => {
  let array = str.split("");
  let newArray = [];
  for (let i = array.length; i >= 0; i--) {
       newArray.push(array[i]);
  }
  let result = newArray.join("");
  return result;
}

reverseString("hello"); // olleh

// -----------------------------------------------

function factorialize(num) {
  let newArray = [];
  for (i = 0; i < num; i++) {
      newArray.push(i);
  }
  return newArray;
}

factorialize(5);

// -----------------------------------------------
// Basic Algorithm Scripting: Factorialize a Number
// Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Only integers greater than or equal to zero will be supplied to the function.

// Remember to use Read-Search-Ask if you get stuck. Write your own code.
function factorialize(num) {
  if (num > 0) {
  let newArray = [];
  for (let i = 1; i <= num; i++) {
      newArray.push(i);
  }
  let result = newArray.reduce((a,b) => a * b);
  return result;
  }
  else if (num === 0) {
    let result = 1;
    return result;
  }
}

factorialize(5);
// => 120
factorialize(0);
// => 1;

// -----------------------------------------------
// Basic Algorithm Scripting: Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.

// Your response should be a number.

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

function findLongestWordLength(str) {
  let array = str.split(" ");
  let newArray = array.sort((a,b) => a.length < b.length); // Note: could also be  array.sort((a,b) => b.length - a.length) source: https://stackoverflow.com/questions/19987389/find-the-longest-word-string-in-an-array
  let result = newArray[0].length;
  return result;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

// -----------------------------------------------
