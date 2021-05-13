'use strict'
var a = 10;
var b = 6;
let c = 7;
const value = a + b + c ;

console.log("The value is "+value);

//Map 
//eg 1
var numbers = [4, 9, 16, 25];
var x = numbers.map(Math.sqrt)
console.log(x);

//eg 2
var numbers = [5, 10, 15, 20];
var newarray = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;
}
console.log(newarray);
