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