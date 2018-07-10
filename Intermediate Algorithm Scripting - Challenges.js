// Intermediate Algorithm Scripting: Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

// The lowest number will not always come first.

function sumAll(arr) {
debugger;
let array = [];
if (arr[0] < arr[1]) {
  for (let i = arr[0]+1; i < arr[arr.length-1]; i++) {
   array.push(i); 
  }
}
else {
  for (let i = arr[0]-1; i > arr[arr.length-1]; i--) {
   array.push(i); 
  }
}

let sum1 = array.reduce((a,b) => a + b);
let sum2 = arr[0] + arr[arr.length-1];
let sum3 = sum1 + sum2;
return sum3;

}

sumAll([1, 4]);
// // => 10
// sumAll([1, 4]) should return a number.
// sumAll([1, 4]) should return 10.
// sumAll([4, 1]) should return 10.
// sumAll([5, 10]) should return 45.
// sumAll([10, 5]) should return 45.
// -----------------------------------------------
