// -------------------------------
// Numbers!
// -------------------------------

// -------------------------------------------------
// Adding strings and numbers together can create
// undesired results. Without changing the initial
// variables, update the functions to manipulate the
// numbers correctly.
// -------------------------------------------------

// --- DON'T CHANGE ME --- //
const steps = "6252";
const wallOneLength = 16;
const wallTwoLength = "22";
// --- DON'T CHANGE ME --- //

function increaseSteps(newSteps) {
  steps = steps + newSteps;
  console.log(steps);
}

function addWalls() {
  console.log(wallOneLength + wallTwoLength);
}

function addDecimal(price) {
  console.log(price.toFixed(2));
}

increaseSteps(500);
increaseSteps(200);
increaseSteps(-300);

addWalls();

addDecimal("52");
addDecimal(33);
