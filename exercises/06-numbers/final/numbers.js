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
let steps = "6252";
const wallOneLength = 16;
const wallTwoLength = "22";
// --- DON'T CHANGE ME --- //

function increaseSteps(newSteps) {
  steps = parseInt(steps);
  steps += newSteps;
  console.log(steps);
}

function addWalls() {
  console.log(parseInt(wallOneLength) + parseInt(wallTwoLength));
}

function addDecimal(price) {
  console.log(parseInt(price).toFixed(2));
}

increaseSteps(500);
increaseSteps(200);
increaseSteps(-300);

addWalls();

addDecimal("52");
addDecimal(33);
