// -------------------------------
// The DOM
// -------------------------------

// Select the first paragraph, and give it a class of 'highlight'
document.querySelector("p:first-of-type").classList.add("highlight");

// Select the paragraph with a class of greeting, and replace
// the text to greet the user.
// Expected outcome ''Welcome Hermies'
const user = "Hermies";
document.querySelector(".greeting").innerText = "Welcome " + user;

// Update the books ul with a list item containing each book from the list.
const bookList = ["Hard Magic", "Spellbound", "Warbound", "IT", "The Stand"];
const bookMarkup = bookList.map(book => `<li>${book}</li>`).join("");
document.querySelector("#books").innerHTML = bookMarkup;

// Get all the children from the ordered list ol
// give each list item a class of done
// add a new item after the other has been marked done
const orderedList = document.querySelector(".orderedList ol");
const todos = orderedList.querySelectorAll("li");
todos.forEach(function(todo) {
  todo.classList.add("done");
});
orderedList.innerHTML += "<li>I am all done</li>";
