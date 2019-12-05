// -------------------------------
// Logic Operators
// -------------------------------

// --------------------------------------------------------------------
//
// There are plenty of cases where you need to check multiple
// conditions and act accordingly. Below are examples that are
// missing the correct logic operators. Read the console log
// inside the condition and replace the __ in the statement
// to get the log to trigger.
//
// --------------------------------------------------------------------

// -- Don't change these -- //
const users = [
  { displayName: "Fry", email: "fry@theFuture.com", age: 26, isLoggedIn: true },
  { displayName: "Leela", email: "leela@theFuture.com", age: 32, isLoggedIn: false },
  { displayName: "professor", email: "professor@theFuture.com", age: 150, isLoggedIn: true }
];
const bankAccount = {
  userID: "1j2i3h4g5f6e7d8c9b0a",
  isLoggedIn: true,
  recentTransactions: [
    { id: "122", type: "debit", amount: 122 },
    { id: "123", type: "debit", amount: 24 },
    { id: "124", type: "credit", amount: 500 }
  ],
  totalAmount: 342
};
const physicalObject = {
  width: 15,
  length: 22.5,
  weight: 179
};
// -- Don't change these -- //

users.forEach(function(user) {
  if (user.age >= 100 && user.isLoggedIn == true) {
    console.log(user.displayName + " is logged in and is old, time to increase the font size.");
  }
});

if (bankAccount.isLoggedIn == true && bankAccount.totalAmount < 500) {
  console.log("Welcome back! Looks like you are below you preset low balance");
}

if (physicalObject.length > 20 || physicalObject.weight > 200) {
  console.log("This object is either to long or to heavy for shipping");
}
