//for each()
var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt = txt + value + " ";
  console.log(txt);
}
// Array.map()
var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunc);
function myFunc(value, index, array) {
    
  return value * 2;
}
console.log(numbers2);
//Array.filter()
var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(filter_func);

function filter_func(value, index, array) {
  return value > 18;
}
console.log(over18);
//Array.reduce()
var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(reduce_func);

function reduce_func(total, value, index, array) {
    console.log("--------"+total);
  return total + value;
}
console.log(sum);
//reduce example
var numbers1 = [45, 4, 9, 16, 25];
var sum2 = numbers1.reduce(reduce_func2, 100);

function reduce_func2(total, value) {
  return total + value;
}
console.log(sum2);
//Array.reduceRight()
//The reduceRight() method does not reduce the original array.
var num1 = [5, 4, 3, 2, 1];
var sum3 = num1.reduceRight(reduce_right);

function reduce_right(total, value, index, array) {
  return total + value;
}
console.log(sum3);
//Array.every()
//The every() method check if all array values pass a test.
var num = [45, 4, 9, 16, 25];
var allOver18 = num.every(every_func);

function every_func(value, index, array) {
  return value > 18;
}
console.log(allOver18);
//Array.some()
//The some() method check if some array values pass a test.
var num3 = [45, 4, 9, 16, 25];
var someOver18 = num3.some(some_func);

function some_func(value, index, array) {
  return value > 18;
}
console.log(someOver18);

//Array.indexOf()
//The indexOf() method searches an array for an element value and returns its position.
var fruits = ["Apple", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple");
//Array.lastIndexoF
var b = fruits.lastIndexOf("Apple");
console.log(b);
console.log(a);
//Array.find()
var numbers = [4, 9, 16, 25, 29];
var first = numbers.find(find_func);

function find_func(value, index, array) {
  return value > 18;
}
console.log(first);
//Array.findIndex()
var numbers = [4, 9, 16, 25, 29];
var f1 = numbers.findIndex(findIndx_func);

function findIndx_func(value, index, array) {
  
  return value > 18;
}
console.log("oooo"+f1);
