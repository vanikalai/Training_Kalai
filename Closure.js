//Example with Regular function
function makeFunc() {
  var name = 'Mozilla';
  console.log(name);
  function displayName() {
    console.log(name);
  }
  return displayName;
}
var myFunc = makeFunc();
myFunc();

//Example with arrow function
var z = 6;
var print = (a) =>{
  var y = 8;
  console.log('hi',z,y);
  const show = ()=>{
    console.log(a);
  }
  return show;
}


var x = print('test');
var y = print('check');
x();
y();

