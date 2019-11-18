// -------------------------------
// Fuuuuuuuuunctions!
// -------------------------------

// --------------------------------------------------------------
// You are going to be creating a series of functions.
// You will need to create a name for the function that makes sense
// to what you are trying to accomplish.
//
// For example :
// function area(width, height) {
//     return width * height;
// }
//
// Each result should be logged to the console.
// console.log( value );
// --------------------------------------------------------------

// Create a function that simply returns 'Greetings Humans'
function greetHuman() {
  return "Greetings Humans";
}

// This function is similar to greetHuman as it will
// return a greeting. But this time it will accept a
// parameter for a creature and return 'Greetings '
// and the creature. Create a function name and parameter
// name and the return statement.
const greetCreature = function(creature) {
  return "What Is Up " + creature;
};

// This function will be similar to the one above.
// The function will require two parameters,
// one for the greeting and the other for the species.
// Create a function name, and the two parameters,
// and return the greeting and species
const greet = (msg, creature) => {
  return msg + " " + creature;
};

// This functions purpose is to square a number and
// pass it to a call back. You will need to create
// the function name and the two required parameters
// then invoke the callback and pass in the result
function squareMe(num, cb) {
  cb(num * num);
}

// Invoke functions here
console.log(greetHuman());

console.log(greetCreature("Dog"));

console.log(greet("Whats up", "Dog"));

squareMe(20, function(final) {
  console.log(final);
});
