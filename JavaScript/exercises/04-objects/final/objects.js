// -------------------------------
// Objects!
// -------------------------------

// --------------------------------------------------------------
// You are going to create a car object and fill it
// up with information about your car. Then log details
// to the console after it's created.
//
// The object needs to have the following properties.
// 1. model
// 2. make
// 3. year
// 4. color
// 5. transmissions
// 6. number of wheels
// 7. accelerate
// 8. decelerate
// 9. add fuel
// 10. turn radio on
// 11. turn radio off
// 12. change station
//
// Hint:
// The last 6 properties are methods, so their values
// should be functions.
// Add fuel accepts a parameter as to what gas it accepts.
// Change station accepts a parameter as to what station to go to.
//
// --------------------------------------------------------------

// Create car object here
var myCar = {
  model: "I-280",
  make: "Izuzu",
  year: 2011,
  color: "Black",
  transmission: "Standard",
  numberOfWheels: 4,
  accelerate: () => {
    // make car go faster
    console.log("vehicle is going faster");
  },
  decelerate: () => {
    // make car go slower
    console.log("vehicle is slowing down");
  },
  addFuel: type => {
    // add fuel type to tank
    console.log("Filled take with " + type + " of gas.");
  },
  turnRadioOn: () => {
    console.log("Radio is now on");
  },
  turnRadioOff: () => {
    console.log("Radio is now off");
  },
  changeStation: whichStation => {
    console.log("You are now listening to " + whichStation);
  }
};

// Log details about car here
console.log(myCar.model);
console.log(myCar.make);
console.log(myCar.year);
console.log(myCar.color);
console.log(myCar.transmission);
console.log(myCar.numberOfWheels);
console.log(myCar.accelerate());
console.log(myCar.decelerate());
console.log(myCar.addFuel("regular"));
console.log(myCar.turnRadioOn());
console.log(myCar.changeStation("103.1"));
