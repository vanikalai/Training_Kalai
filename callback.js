// function greeting(name) {
//   alert('Hello ' + name);
// }

// function processUserInput(callback) {
//   var name = prompt('Please enter your name.');
//   callback(name);
// }

// processUserInput(greeting);
    
//Asynchronous
setTimeout(myFunction, 3000);


function myFunction() {
 console.log('WELCOME');
}

async function hello() {
  return greeting = await Promise.resolve("Hello");
};

hello().then(console.log('hi'));