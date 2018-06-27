// Basic JavaScript: Quoting Strings with Single Quotes:
// Put backlash in front of double quote if you want it to be printed:
// // Example
  var sampleStr = "Alan said, \"Peter is learning JavaScript\".";
// => Alan said, "Peter is learning JavaScript"

// -----------------------------------------------
// Basic JavaScript: Escape Sequences in Strings
// Code	Output
// \'	single quote
// \"	double quote
// \\	backslash
// \n	newline
// \r	carriage return
// \t	tab
// \b	backspace
// \f	form feed

// Example
var myStr = 'FirstLine\n\tSecondLine\nThirdLine';
console.log(myStr);
// => FirstLine
//     SecondLine
// ThirdLine

// -----------------------------------------------
// Basic JavaScript: Use Bracket Notation to Find the First Character in a String
// Bracket notation is a way to get a character at a specific index within a string.
// Example

var firstLetterOfFirstName = "";

var firstName = "Ada";


firstLetterOfFirstName = firstName[0];
// => A

// -----------------------------------------------
// Basic JavaScript: Use Bracket Notation to Find the Last Character in a String

// Example
var firstName = "mark";
var lastLetterOfFirstName = firstName[firstName.length - 1];
// => k

// Another sample
var firstName = "mark";
var lastLetterOfFirstName = firstName[firstName.length - 3];
=> a

// -----------------------------------------------
// Basic JavaScript: Stand in Line
// In Computer Science a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.
// Write a function nextInLine which takes an array (arr) and a number (item) as arguments.
// Add the number to the end of the array, then remove the first element of the array.
// The nextInLine function should then return the element that was removed.

function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
  
  return arr.shift(); // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));

// -----------------------------------------------
// Basic JavaScript: Practice comparing different values
// In the last two challenges, we learned about the equality operator (==) and the strict equality operator (===). Let's do a quick review and practice using these operators some more.

// If the values being compared are not of the same type, the equality operator will perform a type conversion, and then evaluate the values. However, the strict equalty operator will compare both the data type and value as-is, without converting one type to the other.

// Examples

3 == '3' // returns true because JavaScript performs type converstion from string to number
3 === '3' // returns false because the types are different and type conversion is not performed
// Note
// In JavaScript, you can determine the type of a variable or a value with the typeof operator, as follows:

typeof 3 // returns 'number'
typeof '3' // returns 'string'

// -----------------------------------------------

// Golf code:
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes === 1) {
    return names[0];
  }
  else if (strokes <= par-2) {
    return names[1];
  }
  else if (strokes === par-1) {
    return names[2];
  }
  else if (strokes === par) {
    return names[3];
  }
  else if (strokes === par + 1) {
    return names[4];
  }
  else if (strokes === par + 2) {
    return names[5];
  }
  else if (strokes >= par + 3) {
    return names[6];
  }
  else {
    return "Change Me";
  }
  // Only change code above this line
}

// Change these values to test
golfScore(5, 4);

// -----------------------------------------------
// Basic JavaScript: Adding a Default Option in Switch Statements

function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
    case val = "a":
      return "apple";
      break;
    case val = "b":
      return "bird";
      break;
    case val = "c":
      return "cat";
      break;
    default:
      return "stuff";
      break;
  }
  
  // Only change code above this line  
  return answer;  
}

// Change this value to test
switchOfStuff(1);

// -----------------------------------------------
// Basic JavaScript: Multiple Identical Options in Switch Statements

function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
  case val = 1:
  case val = 2:
  case val = 3:
    return "Low";
    break;
  case val = 4:
  case val = 5:
  case val = 6:
    return "Mid";
    break;
  case val = 7:
  case val = 8:
  case val = 9:
    return "High";
    break;  
  }
  
  // Only change code above this line  
  return answer;  
}

// Change this value to test
sequentialSizes(1);

// -----------------------------------------------
// Basic JavaScript: Replacing If Else Chains with Switch

function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line
  
  // if (val === "bob") {
  //   answer = "Marley";
  // } else if (val === 42) {
  //   answer = "The Answer";
  // } else if (val === 1) {
  //   answer = "There is no #1";
  // } else if (val === 99) {
  //   answer = "Missed me by this much!";
  // } else if (val === 7) {
  //   answer = "Ate Nine";
  // }

  switch(val) {
    case val = "bob":
      answer = "Marley";
      break;
    case val = 42:
      answer = "The Answer";
      break;
    case val = 1:
      answer = "There is no #1";
      break;
    case val = 99:
      answer = "Missed me by this much!";
      break;
    case val = 7:
      answer = "Ate Nine";
      break;
  }
  
  // Only change code above this line  
  return answer;  
}

// Change this value to test
chainToSwitch(7);

// -----------------------------------------------
// Basic JavaScript: Add and Delete Properties from a JavaScript Object
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
};

myDog.bark = "woof"; // add the bark property
delete myDog.bark // deletes the bark property

// -----------------------------------------------
// Basic JavaScript: Using Objects for Lookups

// Q. Convert the switch statement into an object called lookup. Use it to look up val and assign the associated string to the result variable.

// Answer:
// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  // switch(val) {
  //   case "alpha": 
  //     result = "Adams";
  //     break;
  //   case "bravo": 
  //     result = "Boston";
  //     break;
  //   case "charlie": 
  //     result = "Chicago";
  //     break;
  //   case "delta": 
  //     result = "Denver";
  //     break;
  //   case "echo": 
  //     result = "Easy";
  //     break;
  //   case "foxtrot": 
  //     result = "Frank";
  // }

  var lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank"
  }

  result = lookup[val]

  // Only change code above this line
  return result;
}

// Change this value to test
phoneticLookup("charlie");
// => "Chicago"

// -----------------------------------------------
// Basic JavaScript: Testing Objects for Properties

// Sometimes it is useful to check if the property of a given object exists or not. We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name. .hasOwnProperty() returns true or false if the property is found or not.

// Q. Modify the function checkObj to test myObj for checkProp. If the property is found, return that property's value. If not, return "Not Found".

// A.
// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  }
  else {
    return "Not Found";
  }
}

// Test your code by modifying these values
checkObj("gift");
// => "pony"
checkOnj("house");
// => "Not Found";

// -----------------------------------------------
// Basic JavaScript: Accessing Nested Objects
// The sub-properties of objects can be accessed by chaining together the dot or bracket notation.

// Here is a nested object:

var ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};

ourStorage.cabinet["top drawer"].folder2; // "secrets"
ourStorage.desk.drawer; // "stapler"

// Another sample:
// Setup
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside["glove box"]; // "maps"

// -----------------------------------------------
// Basic JavaScript: Accessing Nested Arrays

var ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];
ourPets[0].names[1]; // "Fluffy"
ourPets[1].names[0]; // "Spot"

// -----------------------------------------------
// Basic JavaScript: Iterate with JavaScript While Loops
// You can run the same code multiple times by using a loop.

// The first type of loop we will learn is called a "while" loop because it runs "while" a specified condition is true and stops once that condition is no longer true.

var ourArray = [];
var i = 0;
while(i < 5) {
  ourArray.push(i);
  i++;
}

// => 4

// -----------------------------------------------
// Basic JavaScript: Iterate Through an Array with a For Loop
// A common task in JavaScript is to iterate through the contents of an array. One way to do that is with a for loop. This code will output each element of the array arr to the console:

var arr = [10,9,8,7,6];
for (var i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
// Remember that Arrays have zero-based numbering, which means the last index of the array is length - 1. Our condition for this loop is i < arr.length, which stops when i is at length - 1.

// Another sample
// Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line
var total = 0;
for (var i = 0; i < myArr.length; i++) {
  total += myArr[i]
}

// -----------------------------------------------
// Basic JavaScript: Nesting For Loops
// If you have a multi-dimensional array, you can use the same logic as the prior waypoint to loop through both the array and any sub-arrays. Here is an example:

var arr = [
  [1,2], [3,4], [5,6]
];
for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
// This outputs each sub-element in arr one at a time. Note that for the inner loop, we are checking the .length of arr[i], since arr[i] is itself an array.

// Q. Modify function multiplyAll so that it multiplies the product variable by each number in the sub-arrays of arr

// A.
function multiplyAll(arr) {
  debugger;
  var product = 1;
  // Only change code below this line
  for (var i = 0; i < arr.length; i++ ) {
    for (var j = 0; j < arr[i].length; j++ ) {
      product *= arr[i][j];
    }
  }
  // Only change code above this line
  return product;
}

// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);

// -----------------------------------------------
// Basic JavaScript: Iterate with JavaScript Do...While Loops

// The next type of loop you will learn is called a "do...while" loop because it first will "do" one pass of the code inside the loop no matter what, and then it runs "while" a specified condition is true and stops once that condition is no longer true. Let's look at an example.

var ourArray = [];
var i = 0;
do {
  ourArray.push(i);
  i++;
} while (i < 5);

// This behaves just as you would expect with any other type of loop, and the resulting array will look like [0, 1, 2, 3, 4]. However, what makes the do...while different from other loops is how it behaves when the condition fails on the first check. Let's see this in action.

// Here is a regular while loop that will run the code in the loop as long as i < 5.

var ourArray = []; 
var i = 5;
while (i < 5) {
  ourArray.push(i);
  i++;
}

// Notice that we initialize the value of i to be 5. When we execute the next line, we notice that i is not less than 5. So we do not execute the code inside the loop. The result is that ourArray will end up with nothing added to it, so it will still look like this [] when all the code in the example above finishes running.

// Now, take a look at a do...while loop.

var ourArray = []; 
var i = 5;
do {
  ourArray.push(i);
  i++;
} while (i < 5);

// In this case, we initialize the value of i as 5, just like we did with the while loop. When we get to the next line, there is no check for the value of i, so we go to the code inside the curly braces and execute it. We will add one element to the array and increment i before we get to the condition check. Then, when we get to checking if i < 5 see that i is now 6, which fails the conditional check. So we exit the loop and are done. At the end of the above example, the value of ourArray is [5].

// Essentially, a do...while loop ensures that the code inside the loop will run at least once


// -----------------------------------------------

// Q. Change the while loop in the code to a do...while loop so that the loop will push the number 10 to myArray, and i will be equal to 11 when your code finishes running.

// A.
// Setup
var myArray = [];
var i = 10;

// Only change code below this line.

// while (i < 5) {
//   myArray.push(i);
//   i++;
// }

do {
  myArray.push(i);
  i++;
} while (i < 5)

myArray;
// => [10];

// -----------------------------------------------
// Basic JavaScript: Generate Random Fractions with JavaScript
// Random numbers are useful for creating random behavior.

// JavaScript has a Math.random() function that generates a random decimal number between 0 (inclusive) and not quite up to 1 (exclusive). Thus Math.random() can return a 0 but never quite return a 1

// Change randomFraction to return a random number instead of returning 0.

function randomFraction() {

  // Only change code below this line.

  return Math.random(0);

  // Only change code above this line.
}

randomFraction();
// => 0.8808257977087932

// -----------------------------------------------
// Basic JavaScript: Generate Random Whole Numbers with JavaScript
// It's great that we can generate random decimal numbers, but it's even more useful if we use it to generate random whole numbers.

// Use Math.random() to generate a random decimal.
// Multiply that random decimal by 20.
// Use another function, Math.floor() to round the number down to its nearest whole number.
// Remember that Math.random() can never quite return a 1 and, because we're rounding down, it's impossible to actually get 20. This technique will give us a whole number between 0 and 19.

// Putting everything together, this is what our code looks like:

Math.floor(Math.random() * 20);

// We are calling Math.random(), multiplying the result by 20, then passing the value to Math.floor() function to round the value down to the nearest whole number.

// Use this technique to generate and return a random whole number between 0 and 9.

function randomWholeNum() {

  // Only change code below this line.

  return Math.floor(Math.random() * 10);
}

randomWholeNum();
// => 7

// -----------------------------------------------
// Basic JavaScript: Generate Random Whole Numbers within a Range
// Instead of generating a random number between zero and a given number like we did before, we can generate a random number that falls within a range of two specific numbers.

// To do this, we'll define a minimum number min and a maximum number max.

// Here's the formula we'll use. Take a moment to read it and try to understand what this code is doing:

Math.floor(Math.random() * (max - min + 1)) + min

// Q. Create a function called randomRange that takes a range myMin and myMax and returns a random number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive.

// A. 

function randomRange(myMin, myMax) {
  debugger;
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin; // Change this line

}

// Change these values to test your function
var myRandom = randomRange(5, 15);
// => 8

// -----------------------------------------------
// Basic JavaScript: Use the parseInt Function with a Radix
// The parseInt() function parses a string and returns an integer. It takes a second argument for the radix, which specifies the base of the number in the string. The radix can be an integer between 2 and 36.

// The function call looks like:

parseInt(string, radix);

// And here's an example:

var a = parseInt("11", 2);

// The radix variable says that "11" is in the binary system, or base 2. This example converts the string "11" to an integer 3.

// Q. Use parseInt() in the convertToInteger function so it converts a binary number to an integer and returns it.
function convertToInteger(str) {
        return parseInt(str, 2);

}

convertToInteger("10011");
// => 19

// -----------------------------------------------
// Basic JavaScript: Use the Conditional (Ternary) Operator
// The conditional operator, also called the ternary operator, can be used as a one line if-else expression.

// The syntax is:

// condition ? statement-if-true : statement-if-false;

// The following function uses an if-else statement to check a condition:

function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}
// This can be re-written using the conditional operator:

function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater";
}

// Use the conditional operator in the checkEqual function to check if two numbers are equal or not. The function should return either true or false.

function checkEqual(a, b) {
  return a === b ? true : false;
}

checkEqual(1, 2);

// -----------------------------------------------
// Basic JavaScript: Use Multiple Conditional (Ternary) Operators
// In the previous challenge, you used a single conditional operator. You can also chain them together to check for multiple conditions.

// The following function uses if, else if, and else statements to check multiple conditions:

function findGreaterOrEqual(a, b) {
  if(a === b) {
    return "a and b are equal";
  }
  else if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}
// The above function can be re-written using multiple conditional operators:

function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}

// Aother sample
function checkSign(num) {
  return (num > 0) ? "positive" : (num < 0) ? "negative" : "zero";
}

checkSign(10);

// -----------------------------------------------
// ES6: Write Higher Order Arrow Functions
// It's time we see how powerful arrow functions are when processing data.

// Arrow functions work really well with higher order functions, such as map(), filter(), and reduce(), that take other functions as arguments for processing collections of data.

// Read the following code:

FBPosts.filter(function(post) {
  return post.thumbnail !== null && post.shares > 100 && post.likes > 500;
})
// We have written this with filter() to at least make it somewhat readable. Now compare it to the following code which uses arrow function syntax instead:

FBPosts.filter((post) => post.thumbnail !== null && post.shares > 100 && post.likes > 500)
This code is more succinct and accomplishes the same task with fewer lines of code.

// Q. Use arrow function syntax to compute the square of only the positive integers (fractions are not integers) in the array realNumberArray and store the new array in the variable squaredIntegers.

// A.
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  const squaredIntegers = arr.filter((int) => int === parseInt(int)).map((int) => int * int);
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
// => [16, 1764, 36]
// -----------------------------------------------
// ES6: Set Default Parameters for Your Functions
// In order to help us create more flexible functions, ES6 introduces default parameters for functions.

// Check out this code:
function greeting(name = "Anonymous") {
  return "Hello " + name;
}
console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous
// The default parameter kicks in when the argument is not specified (it is undefined). As you can see in the example above, the parameter name will receive its default value "Anonymous" when you do not provide a value for the parameter. You can add default values for as many parameters as you want.

// Q. Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.
const increment = (function() {
  "use strict";
  return function increment(number, value = 1) {
    return number + value;
  };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6
// -----------------------------------------------
// ES6: Use the Rest Operator with Function Parameters
// In order to help us create more flexible functions, ES6 introduces the rest operator for function parameters. With the rest operator, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function.

// Check out this code:

function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); // You have passed 3 arguments
console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 arguments.
// The rest operator eliminates the need to check the args array and allows us to apply map(), filter() and reduce() on the parameters array.

// Modify the function sum so that it uses the rest operator and it works in the same way with any number of parameters.
// Before:
const sum = (function() {
  "use strict";
  return function sum(x, y, z) {
    const args = [ x, y, z ];
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6

// Ans.
const sum = (function() {
  "use strict";
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6

// -----------------------------------------------
// ES6: Use the Spread Operator to Evaluate Arrays In-Place
// ES6 introduces the spread operator, which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.

The ES5 code below uses apply() to compute the maximum value in an array:

var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr); // returns 89
// We had to use Math.max.apply(null, arr) because Math.max(arr) returns NaN. Math.max() expects comma-separated arguments, but not an array.

// The spread operator makes this syntax much better to read and maintain.

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); // returns 89
// ...arr returns an unpacked array. In other words, it spreads the array.

// However, the spread operator only works in-place, like in an argument to a function or in an array literal. The following code will not work:

const spreaded = ...arr; // will throw a syntax error

// Q. Copy all contents of arr1 into another array arr2 using the spread operator.

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1]; // change this line
})();
console.log(arr2);
// => ["JAN", "FEB", "MAR", "APR", "MAY"] 

// -----------------------------------------------
// ES6: Use Destructuring Assignment to Assign Variables from Objects
// We saw earlier how spread operator can effectively spread, or unpack, the contents of the array.

// We can do something similar with objects as well. Destructuring assignment is special syntax for neatly assigning values taken directly from an object to variables.

// Consider the following ES5 code:

var voxel = {x: 3.6, y: 7.4, z: 6.54 };
var x = voxel.x; // x = 3.6
var y = voxel.y; // y = 7.4
var z = voxel.z; // z = 6.54
// Here's the same assignment statement with ES6 destructuring syntax:

const { x, y, z } = voxel; // x = 3.6, y = 7.4, z = 6.54
// If instead you want to store the values of voxel.x into a, voxel.y into b, and voxel.z into c, you have that freedom as well.

const { x : a, y : b, z : c } = voxel // a = 3.6, b = 7.4, c = 6.54
// You may read it as "get the field x and copy the value into a," and so on.

// Q. Use destructuring to obtain the length of the input string str, and assign the length to len in line.
function getLength(str) {
  "use strict";

  // change code below this line
  const {length : len} = str; // change this
  // change code above this line

  return len; // you must assign length to len in line

}

console.log(getLength('FreeCodeCamp'));
// => 12

// -----------------------------------------------
// ES6: Use Destructuring Assignment to Assign Variables from Nested Objects
// We can similarly destructure nested objects into variables.

// Consider the following code:

const a = {
  start: { x: 5, y: 6},
  end: { x: 6, y: -9 }
};
const { start : { x: startX, y: startY }} = a;
console.log(startX, startY); // 5, 6
// In the example above, the variable start is assigned the value of a.start, which is also an object.

// Q. Use destructuring assignment to obtain max of forecast.tomorrow and assign it to maxOfTomorrow.

// A.
const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
  "use strict";
  // change code below this line
  const { tomorrow : { max: maxOfTomorrow } } = forecast; // change this line
  // change code above this line
  return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6
// -----------------------------------------------
// ES6: Use Destructuring Assignment to Assign Variables from Arrays
// ES6 makes destructuring arrays as easy as destructuring objects.

// One key difference between the spread operator and array destructuring is that the spread operator unpacks all contents of an array into a comma-separated list. Consequently, you cannot pick or choose which elements you want to assign to variables.

// Destructuring an array lets us do exactly that:

const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1, 2
// The variable a is assigned the first value of the array, and b is assigned the second value of the array.

// We can also access the value at any index in an array with destructuring by using commas to reach the desired index:

// Q. Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a.

// A.
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5

let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
   [a, b] = [b, a];
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8

// -----------------------------------------------
// ES6: Use Destructuring Assignment with the Rest Operator to Reassign Array Elements
// In some situations involving array destructuring, we might want to collect the rest of the elements into a separate array.

// The result is similar to Array.prototype.slice(), as shown below:

const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b); // 1, 2
console.log(arr); // [3, 4, 5, 7]
// Variables a and b take the first and second values from the array. After that, because of rest operator's presence, arr gets rest of the values in the form of an array.

// The rest element only works correctly as the last variable in the list. As in, you cannot use the rest operator to catch a subarray that leaves out last element of the original array.

//Q. Use destructuring assignment with the rest operator to perform an effective Array.prototype.slice() so that arr is a sub-array of the original array source with the first two elements omitted.

// A. 
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // change code below this line
  const [a, b, ...arr] = list; // change this
  // change code below this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];

// -----------------------------------------------
// ES6: Use Destructuring Assignment to Pass an Object as a Function's Parameters
// In some cases, you can destructure the object in a function argument itself.

// Consider the code below:

const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;
  // do something with these variables
}
// This effectively destructures the object sent into the function. This can also be done in-place:

const profileUpdate = ({ name, age, nationality, location }) => {
  /* do something with these fields */
}
// This removes some extra lines and makes our code look neat.

// This has the added benefit of not having to manipulate an entire object in a function; only the fields that are needed are copied inside the function.

// Use destructuring assignment within the argument to the function half to send only max and min inside the function.
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = (function() {
  "use strict"; // do not change this line

  // change code below this line
  return function half({max, min}) {
    // use function argument destructuring
    return (stats.max + stats.min) / 2.0;
  };
  // change code above this line

})();
console.log(stats); // should be object
console.log(half(stats)); // should be 28.015
// -----------------------------------------------
