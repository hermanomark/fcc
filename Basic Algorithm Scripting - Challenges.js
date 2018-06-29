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
  let fahrenheit = celsius * 9/5 + 32;
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
// => 6
// findLongestWordLength("The quick brown fox jumped over the lazy dog") should return a number.
// findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6.
// findLongestWordLength("May the force be with you") should return 5.
// findLongestWordLength("Google do a barrel roll") should return 6.
// findLongestWordLength("What is the average airspeed velocity of an unladen swallow") should return 8.

// -----------------------------------------------
// Basic Algorithm Scripting: Return Largest Numbers in Arrays
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

function largestOfFour(arr) {
  // You can do this!
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].sort((a,b) => b - a ));
  }
  let finalArr = [];
  for (let i = 0; i < newArr.length; i++) {
    finalArr.push(newArr[i][0]);
  }
  return finalArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
// => [5, 27, 39, 1001]

// largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27, 5, 39, 1001].
// largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) should return [9, 35, 97, 1000000].
// largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]) should return [25, 48, 21, -3].

// -----------------------------------------------
// Basic Algorithm Scripting: Confirm the Ending
// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  let secondValue = str.length
  if (str.substr(-target.length) === target) {
    return true;
  }
  else {
    return false;
  }
}

confirmEnding("Bastian", "n");
// => true
// confirmEnding("Congratulation", "on") should return true.
// confirmEnding("Connor", "n") should return false.
// confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.
// confirmEnding("He has to give me a new name", "name") should return 
// Do not use the built-in method .endsWith() to solve the challenge.

// -----------------------------------------------
// Basic Algorithm Scripting: Repeat a String Repeat a String
// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

// Remember to use Read-Search-Ask if you get stuck. Write your own code.
function repeatStringNumTimes(str, num) {
  // repeat after me
  let arr = []
  for (let i = 0; i < num; i++) {
    arr.push(str);
  }
  let result = arr.join("");
  return result;
}

repeatStringNumTimes("abc", 3);
// => "abcabcabc".
// repeatStringNumTimes("*", 3) should return "***".
// repeatStringNumTimes("abc", 4) should return "abcabcabcabc".
// repeatStringNumTimes("abc", 1) should return "abc".
// repeatStringNumTimes("*", 8) should return "********".
// repeatStringNumTimes("abc", -2) should return "".
// The built-in repeat()-method should not be used

// -----------------------------------------------
// Basic Algorithm Scripting: Truncate a String
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num) {
    return str.substr(0, num) + '...';
  }
  else {
    return str.substr(0, num);
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

// => "A-tisket...".

// truncateString("Peter Piper picked a peck of pickled peppers", 11) should return "Peter Piper...".
// truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return "A-tisket a-tasket A green and yellow basket".
// truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) should return "A-tisket a-tasket A green and yellow basket".
// truncateString("A-", 1) should return "A...".
// truncateString("Absolutely Longer", 2) should return "Ab...".

// -----------------------------------------------
// Basic Algorithm Scripting: Finders Keepers
// Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function findElement(arr, func) {
  let array = arr.filter(func);
  let result = array[0];
  return result;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
// => 2
// findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.
// findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.

// -----------------------------------------------
// Basic Algorithm Scripting: Boo who
// Check if a value is classified as a boolean primitive. Return true or false.

// Boolean primitives are true and false.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  if ((bool === true ) || (bool === false)) {
    return true;
  }
  else {
    return false;
  }
}

booWho(null);

// booWho(true) should return true.
// booWho(false) should return true.
// booWho([1, 2, 3]) should return false.
// booWho([].slice) should return false.
// booWho({ "a": 1 }) should return false.
// booWho(1) should return false.
// booWho(NaN) should return false.
// booWho("a") should return false.
// booWho("true") should return false.
// booWho("false") should return false.

// -----------------------------------------------
// Basic Algorithm Scripting: Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
  let arr = str.split(" ");
  let newArr = [];
  for (let i=0; i < arr.length; i++ ) {
    newArr.push(arr[i].toLowerCase());
  }
  let secArr = [];
  for (let i=0; i < newArr.length; i++) {
    secArr.push(newArr[i].charAt(0).toUpperCase().concat(newArr[i].substring(1, newArr[i].length)));
  }
  let result = secArr.join(" ");
  return result;
}

titleCase("I'm a little tea pot");

// titleCase("I'm a little tea pot") should return I'm A Little Tea Pot.
// titleCase("sHoRt AnD sToUt") should return Short And Stout.
// titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return Here Is My Handle Here Is My Spout.

// Second Solution (refractored):
function titleCase(str) {
  return str.split(" ").map((a) => a.toLowerCase()).map((a) => a.charAt(0).toUpperCase().concat(a.substring(1, a.length))).join(" ");
}

titleCase("I'm a little tea pot");

// -----------------------------------------------
// Basic Algorithm Scripting: Slice and Splice
// You are given two arrays and an index.

// Use the array methods slice and splice to copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let array = arr2.slice();
  array.splice(n, 0, arr1)
  let result = [].concat.apply([], array);
  return result;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

// -----------------------------------------------
// Basic Algorithm Scripting: Falsy Bouncer
// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  let newArr = [];
  for (let i = 0; i < arr.length; i++ ) {
    if (!!arr[i] === true) {
      newArr.push(arr[i]);
    } 
  }
  return newArr;
}

bouncer([7, "ate", "", false, 9]);


// -----------------------------------------------

// Basic Algorithm Scripting: Where do I Belong
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
        return i;
    }
  }
  return arr.length;
}

getIndexToIns([40, 60], 50);

// -----------------------------------------------

// Basic Algorithm Scripting: Mutations
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

function mutation(arr) {
  let arr1 = arr[0].toLowerCase();
  let arr2 = arr[1].toLowerCase();

  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) === -1) {
      return false;
    }
  }
  return true;
}

mutation(["Mary", "Aarmy"])

// mutation(["hello", "hey"]) should return false.
// mutation(["hello", "Hello"]) should return true.
// mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
// mutation(["Mary", "Army"]) should return true.
// mutation(["Mary", "Aarmy"]) should return true.
// mutation(["Alien", "line"]) should return true.
// mutation(["floor", "for"]) should return true.
// mutation(["hello", "neo"]) should return false.
// mutation(["voodoo", "no"]) should return false.

// -----------------------------------------------
// Basic Algorithm Scripting: Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {

  let temp = [];
  let result = [];

  for (let a = 0; a < arr.length; a++) {
    if (a % size !== size - 1)
      temp.push(arr[a]);
    else {
      temp.push(arr[a]);
      result.push(temp);
      temp = [];
    }
  }

  if (temp.length !== 0)
    result.push(temp);
  return result;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);
// should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].

// chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].


// Intermediate Solution:
function chunkArrayInGroups(arr, size) {
  var newArr = [];
  while (arr.length) {
    newArr.push(arr.splice(0,size));
  }
  return newArr;
}

