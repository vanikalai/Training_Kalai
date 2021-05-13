var fruits = ["Banana", "Orange", "Apple", "Mango"];
//toString()
console.log(fruits.toString());
//pop and push
console.log(fruits.pop());

var x = fruits.push("JackFruit")
console.log(fruits);
//shift() method removes the first array element and "shifts" all other elements to a lower index.
var shiftedfruits = fruits.shift();
console.log(shiftedfruits);
console.log(fruits);
//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements
fruits.unshift("Litchi")
console.log(fruits);
//Array elements are accessed using their index number:
console.log(fruits[0]);
//length()
fruits[fruits.length] = "kiwi"
console.log(fruits);
//delete
delete fruits[0]; 
console.log(fruits);
//The splice() method can be used to add new items to an array:
var employee = ['Kalai','Vani','Arun',]
employee.splice( "2",0,"Mani", "Santha");
console.log(employee);
//concat()
var girls = ["anliya", "Lone"];
var boys = ["Emil", "Tobias", "Linus"];
var myChildren = girls.concat(boys);
console.log(myChildren);
//Merging Three Arrays
var girls = ["Anliya", "Lone"];
var boys = ["Emil", "Tobias", "Linus"];
var parents = ["Mom Annie", "Dad Mark"];
let Family = girls.concat(boys,parents);
console.log(Family);
//The slice() method slices out a piece of an array into a new array.
let areas = ['annanagar','velachery','medavakam','mambakam','selaiyur'];
let newAreas = areas.slice(1,4);
//let newAreas = areas.slice(3)
console.log(newAreas);
//sort
var sortedArray = Family.sort();
console.log(sortedArray);
//The reverse() method reverses the elements in an array.
Family.sort()
var reversedArray = Family.reverse();
console.log(reversedArray);
//Numeric Sort 
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
console.log(points);
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});
console.log(points);
//Sort an Array in random orders
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return 0.5 - Math.random()});

console.log(points);


