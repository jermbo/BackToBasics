// --------------------------------------------------
// Scope, who has access to me?
// --------------------------------------------------

// --------------------------------------------------------------
// In order to understand scope, you need to use it.
// You are going to create a couple of functions that
// contain their own local scope, but access a global
// variable to alter their results.
//
// Below are a couple of functions that are have errors.
// User your new understanding of scope and correct the
// issues present.
// --------------------------------------------------------------

function displayScore() {
  console.log(`${playerName}'s score is ${playerScore}`);
}

function createPlayer() {
  playerName = newName;
}

function updateScore() {
  playerScore += newScore;
}

createPlayer("Bender");
updateScore(100);
updateScore(300);
updateScore(-200);
displayScore();
