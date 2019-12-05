// -------------------------------
// Events
// -------------------------------

// Listen for the input event on the input form and update
// the nameDisplay with what the user types.
var nameInput = document.querySelector(".nameInput");
var nameDisplay = document.querySelector(".nameDisplay span");
nameInput.addEventListener("input", function(e) {
  e.preventDefault();
  nameDisplay.innerText = this.value;
});

// Listen for the toggle button click, and toggle the images
// visibility. If it's shown, hide it. If it's hidden, show it.
var toggleBtn = document.querySelector(".toggleImageBtn");
var mainImage = document.querySelector("#mainImage");

toggleBtn.addEventListener("click", function(e) {
  if (mainImage.style.display == "none") {
    mainImage.style.display = "block";
  } else {
    mainImage.style.display = "none";
  }
});

// Listen for when the mouse enters and leaves the div.
// Update the display to say where the mouse entered, x and y.
// Update the display to say where the mouse left, x and y.
var hoverMe = document.querySelector(".hoverMe");
hoverMe.addEventListener("mouseenter", function(e) {
  this.innerText = `Mouse Entered at x: ${e.x} y: ${e.y}`;
});
hoverMe.addEventListener("mouseleave", function(e) {
  this.innerText = `Mouse Left at x: ${e.x} y: ${e.y}`;
});
