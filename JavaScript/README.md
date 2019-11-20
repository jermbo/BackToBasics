# JavaScript - Back to Basics

## Table of Contents

- Intro
- Who is this course for?
- What to expect?
- Language Fundamentals
  - Variables
  - Functions
  - Scope
  - Objects
  - Strings
  - Numbers
  - Coercion
  - Arrays
    - Accessors
    - Iterators
    - Mutators
  - Arithmetic Operators
  - Assignment Operators
  - Logic Operators
  - Decision Making
  - The DOM
  - Events

## Intro

My name is Jeremy "Jermbo" Lawson. You can find me on Twitter and GitHub @jermbo

I have been in the industry for over 15 years. Started off as a designer and illustrator, then moved to developer a little over 12 years ago.

I host several events and meetups. Palm Beach JavaScript, BocaJS, and Palm Beach FrontEnd Developers.

I help run a non-profit dedicated to teaching kids to code called Code Palm Beach.

I am a FrontEnd Tech Lead and Community Lead at Cognizant Softvision.

Above all, I am a husband and father.

## Who is this course for?

This corse is designed to reintroduce you to concepts that you might be using on a daily basis but don't really understand why.

This is targeted towards individuals who have been using JavaScript for one to three years who want to take their knowledge to the next level.

## What to expect?

In each section you will be introduced to a topic, provided a definitions, examples, and end with some exercise.

The exercises are intended to reinforce what was just learned. Please refer to the slides of that section for reference. We will be walking around to offer assitance if needed.

## Language Fundamentals

In this portion we will break down some of the fundamentals of the language. One thing I want you to take away is that a lot of this is programming fundamentals. I will do my best to point out the areas that are JavaScript specific and which are just programming basics.

### Variables

#### Definition

A **variable** is a named location in **memory** where **data can be stored**.

It's a **symbolic** name given to a **known**, or **unknown**, quantity that permits the **name to be used independently from the information it holds**.

#### Variable Types

In JavaScript we have three ways to declare a variable.

**var** **let** **const**

var - is the traditional way to declaring a variable. This is function scoped and has some unique quirks about it. It's generally best to not use this, unless you have to support a older browser.

let - introduced in ES6, and is the replacement to var. This is blocked scoped and acts like you expect it to. Its main benefit over var is you cannot redeclare a let with the same name.

const - introduced in ES6, and should be the first way you should utilize unless absolutely needed. It has same characteristics as let, in addition it cannot be reassigned and must contain an initial value.

#### Naming Rules

When **naming** a **variable** there are some rules you need to be aware of.

- Variables can only start with a **letter**, **dollar sign (\$)**, or **underscore (\_)**
- They **cannot** contain a **dash (-)**, a **period (.)**, or a **space ( )**. (This will become more obvious in later sections.)
- They **cannot** be a **reserved word**. Things like **true**, **this**, **class**, etc. (If you see your editor highlight them differently, that is a good sign it cannot be used.)
- The are **case sensitive**. **score** is not the same thing as **Score**.

#### Style Rules

You will run into different styles for naming a variable. I want to take a minute and list out and define the most common ones.

- **Camel Case** is a compound word where the first word is all lowercase, and the first letter of each following word is capitalized. For example; `currentUser` `totalBalance` `playerPositionX` `currentDashboardState`
- **Pascal Case** is a compound word where the first letter of every word is capitalized and the rest are lower cased.
- **Snake Case** is the practice of writing compound in which the elements are separated with one underscore.

Outside the **Naming Rules**, style choices are completely optional and up to you. My general advice is, pick one and stick with it. Consistency is way more important than any given style.

Lastly, choose meaningful names. Code is for you and other humans. It's important to write code as human understandable as possible. Avoid abbreviations only you know, or obscure names that don't fit the context of the code you are creating, or giving a name that does not represent the data it is storing.

#### Examples

To define a variable you use the keyword **let** or **const** and give it a name.

```JavaScript
// Good Examples
let userName;
let is_logged_in = false;
let score = 4000;
const PlacesToVisit = ['Florida', 'Ohio', 'California'];
const currentYear = new Date().getFullYear();

// Bad Examples
let cliu; // Current Logged In User
const positionX = 'London'; // What's the connection?
const uFavColor = 'Bananas'; // Weird. `u` as in User or UI?
```

#### Exercise Time

In file `01-vars/start/vars.js`, you will see a series of variables that need names. Change the `var` key word to an appropriate `let` or `const` and create meaningful names.

### Functions

#### Definition

Generally speaking, a **function** is a "subprogram" that can be **called** by code external to the function.

A function is composed of a sequence of statements called the **function body**.

Data can be **optionally passed** into a function and a function can **optionally return** data.

There are a couple of different ways to write a function. Here are a some more common ways you will see in the wild.

- Anonymous
- Declaration
- Expression
- Arrow

#### Anonymous

Simply put, an **anonymous** function is a function without a name.

```JavaScript
(function(){
  // do stuff
})();
```

#### Declaration

A **function declaration** is a function with a **name**. These follow very similar rules to variables and can be called later in your code by referring to the name provided.

```JavaScript
function addTwo(num1, num2) {
  return num1 + num2;
}
```

#### Expression

A **function expression** is a function where an expression should be. (An expression is the right hand side of the equals sign.)

```JavaScript
const addTwo = function(num1, num2) {
  return num1 + num2;
}
```

#### Arrow

**Arrow functions** are syntax sugar and have unique properties to them. (More on why later.)

---BUILD ARROW FUNCTION VISUAL---

```JavaScript
const addTwo = (num1, num2) => num1 + num2;
```

#### Invoke

In order to get a block of code to run, the function needs to be **invoked**. Other synonyms include; **call**, **trigger**, **run**.

All you have to do to **run** a function is **refer to it via its name along with a pair of parentheses**.

```JavaScript
addTwo(2,5);
```

#### Parameters / Arguments

**Parameters** are a set of **variables** that will affect how your function runs. You **define parameters** when you create your function by adding a **comma separated list** of names that represent the value they will **eventually hold**.

**Arguments** are what you **pass into** the function to alter the outcome. **Arguments** match **one to one** the parameter list.

```JavaScript
function divideTwo(numOne, numTwo) {
  return numOne / numTwo;
}

function cubeMe(num) {
  return num * num * num;
}

console.log( divideTwo(10, 5) );
console.log( cubeMe(4) );
```

```JavaScript
function divideTwo(10, 5) {
  return numOne / numTwo;
}

function cubeMe(4) {
  return num * num * num;
}

console.log( divideTwo(10, 5) );
console.log( cubeMe(4) );
```

```JavaScript
function divideTwo(10, 5) {
  return 10 / 5;
}

function cubeMe(4) {
  return 4 * 4 * 4;
}

console.log( divideTwo(10, 5) );
console.log( cubeMe(4) );
```

```JavaScript
function divideTwo(10, 5) {
  return 2;
}

function cubeMe(4) {
  return 64;
}

console.log( divideTwo(10, 5) );
console.log( cubeMe(4) );
```

```JavaScript
function divideTwo(10, 5) {
  return 2;
}

function cubeMe(4) {
  return 64;
}

console.log( 2 );
console.log( 64 );
```

#### Callback

A **callback** is a function that is **passed** as an **argument**.

All **callbacks** are **functions**. But not all **functions** are **callbacks**.

Only when a **function** is passed as an **argument** is when it is known as a **callback**.

##### Alert

```JavaScript
function greetUser (cb, userName) {
  cb('Hello ' + userName);
}

greetUser (alert, 'Jermbo');
```

```JavaScript
function greetUser (alert, 'Jermbo') {
  cb('Hello ' + userName);
}

greetUser (alert, 'Jermbo');
```

```JavaScript
function greetUser (alert, 'Jermbo') {
  alert('Hello ' + 'Jermbo');
}

greetUser (alert, 'Jermbo');
```

##### Anonymous Function

```JavaScript
function greetUser (cb, userName) {
  cb('Hello ' + userName);
}

greetUser (function (msg) {
  console.log(msg);
}, 'Jermbo');
```

```JavaScript
function greetUser (function, 'Jermbo') {
  cb('Hello ' + userName);
}

greetUser (function (msg) {
  console.log(msg);
}, 'Jermbo');
```

```JavaScript
function greetUser (function, 'Jermbo') {
  function('Hello ' + 'Jermbo');
}

greetUser (function (msg) {
  console.log(msg);
}, 'Jermbo');
```

```JavaScript
function greetUser (function, 'Jermbo') {
  function('Hello ' + 'Jermbo');
}

greetUser (function ('Hello Jermbo') {
  console.log(msg);
}, 'Jermbo');
```

```JavaScript
function greetUser (function, 'Jermbo') {
  function('Hello ' + 'Jermbo');
}

greetUser (function ('Hello Jermbo') {
  console.log('Hello Jermbo');
}, 'Jermbo');
```

##### Function Declaration

```JavaScript
function greetUser (cb, userName) {
  cb('Hello ' + userName);
}
function logStuff (msg) {
  console.log(msg);
}
greetUser(logStuff, 'Jermbo');
```

```JavaScript
function greetUser (logStuff, 'Jermbo') {
  cb('Hello ' + userName);
}
function logStuff (msg) {
  console.log(msg);
}
greetUser(logStuff, 'Jermbo');
```

```JavaScript
function greetUser (logStuff, 'Jermbo') {
  logStuff('Hello ' + 'Jermbo');
}
function logStuff ('Hello Jermbo') {
  console.log(msg);
}
greetUser(logStuff, 'Jermbo');
```

```JavaScript
function greetUser (logStuff, 'Jermbo') {
  logStuff('Hello ' + 'Jermbo');
}
function logStuff ('Hello Jermbo') {
  console.log('Hello Jermbo');
}
greetUser(logStuff, 'Jermbo');
```

#### Exercise Time

In file `02-functions/start/functions.js`, you will see a series of functions that need names and parameters. Remember, function names follow very similar rules to variables.

### Scope

#### Definition

**Scope** determines the visibility or accessibility of a variable or function of your code. There are four scopes in JavaScript.

- Global
- Local
- Function
- Block

#### Global

JavaScript has one global scope, **window**. Anything that is not written inside a local, function, or block scope can be accessed and altered by any scope in your code.

```JavaScript
const character = 'Bender';
console.log(character); // "Bender"

function getCharacter() {
  console.log(character); // "Bender"
}

gerCharacter();
```

#### Local

When declaring a variable inside a function, you are declaring it in a **local scope**. Every function has its own scope, so if you declare the same variable inside different functions you will not have an issue.

```JavaScript
// Global Scope
const mainMessage = 'Welcome to the Future!';

function UserInterface() {
  // Local Scope 1
  const user = 'Professor';

  function logUser() {
    // Local Scope 2
    const now = new Date();
    console.log(user + ' was logged at ' + now);
    // Professor was logged at 5:15pm
  }

  logUser();
}

// Global Scope
function NonUserInterface() {
  // Local Scope 3
  const user = 'Zap';
  console.log(user); // Zap
}

UserInterface();
```

#### Function

Variables declared inside a function are in it's scope and cannot be access outside that function.

```JavaScript
function scope() {
  const inside = 'Yep, I am inside scope';
  console.log(inside); // "Yep, I am inside scope"
}
scope();

console.log(inside); // Reference Error: inside is not defined.
```

#### Block

Introduced in ES6, a **block scope** is the area within curly brackets. Typically within an **if**, or **switch**, or **loops** are considered blocks.

> `let` and `const` are block scoped variables.

```JavaScript
function futurama() {
  const isAwesome = true;
  if(isAwesome) {
    var character1 = 'Fry';
    let character2 = 'Bender';
    const character3 = 'Leela';
  }

  console.log(character1); // "Fry"
  console.log(character2); // Reference Error: character2 not defined
  console.log(character3); // Reference Error: character3 not defined
}
```

#### Comparison Table

|                              | var      | let   | const |
|------------------------------|----------|-------|-------|
| reassigned                   | o        | o     | x     |
| Scope                        | function | block | block |
| Reference before declaration | o        | x     | x     |

### Objects

#### Definition

**Objects** are a set of **key:value** pairs. You can associate objects with real world items.

For example, a **vehicle** is an **object**. All vehicles have the same **properties** and **methods**, but the values **differ between different vehicle**.

```JavaScript
const myCar = {
  model: 'I-280',
  make: 'Izuzu',
  year: 2011,
  color: 'Black',
  transmission: 'standard',
  numberOfWheels: 4,
  accelerate: () => {
    // make car go faster
  },
  decelerate: () => {
    // make car go slower
  },
  addFuel: (type, amount) => {
    // add fuel of type to tank.
  }
}
```

#### Properties and Methods

**Properties** are like a variable, they store a value. Your care might have a different make, so your cars ***make* property** will reflect accordingly.

**Methods** are like functions, they do something. Again, since  your car is different, the type and amount of fuel you require will be different.

*Note* **Properties** are **variables**, just associated with an **object**. 

*Note* **Methods** are **functions**, just associated with an **object**.

#### Dot Notation

There are **two** ways to access a property or method of an object. The first way is use the **dot notation**.

```JavaScript
console.log( myCar.make ); // Izuzu
console.log( myCar.year ); // 2011
myCar.accelerate(); // "going faster"
```

#### Bracket Notation

The second way to access properties or methods is by using the **bracket notation**.

```JavaScript
console.log( myCar['make'] ); // Izuzu

const prop = 'year';
console.log( myCar[prop] ); // 2011

const method = 'accelerate';
myCar[method](); // "going faster"
```

#### Bracket Notation Use Case 1

There are two use cases that would require you to use the bracket notation over the dot notation. The first, most straight forward reason, is the object key has a space or character not allowed in  a variable name. 

```JavaScript
const special = {
  'Key One': 'The First Value',
  'Key-ID': 1234,
  'the.func': () => { console.log('the func') }
};

// Incorrect
// Cannot access a key with a space
console.log(special.Key One);
// Cannot access a key with a dash
console.log(special.Key-ID);
// Cannot access a key with a dot
console.log(special.the.func);

// Correct
console.log(special['Key One']); // "The First Value"
console.log(special['Key-ID']); // 1234
console.log(special['the.func']); // "the func"
```

#### Bracket Notation Use Case 2

The second use case is accessing an item based on user input. 
Let's say we have an interface that allows the user to change the values of each property on their car. We have a **keyInput** select that maps to each property in the object. When the user selects it, it will reflect the property chosen and allow the user to change the value.

```JavaScript
const userKey = keyInput.value;
const userValue = valInput.value;

myCar[userKey] = newValue;
```

### Strings

#### Definition

A **string** is any set of characters **between quotes**, either single or quotes.

You can use either at any time, just be aware **what you start with you must end with**.

```JavaScript
console.log('hello');

const userName = "Bender";
console.log( userName ); // "Bender"
```

#### Concatenation

**Concatenation** is the operation of join character strings end-to-end.

```JavaScript
console.log('Futur' + "ama"); // "Futurama"

const sport = "Blitz";
const type = 'ball';
console.log( sport + type ); // "Blitzball"
```

#### Template Literals

**Template Literals** are string literals allowing embedded expressions. This supports **string interpolation** as well as **multi-line** strings.

```JavaScript
const num1 = 4;
const num2 = 2; 
console.log(`${num1} + ${num2} = ${num1 + num2}`); // "4 + 2 = 6"
```

```JavaScript
const user = {
  first: "Phillip",
  last: "Fry"
};
console.log(`${user.first} ${user.last}`); // "Phillip Fry"
```

```JavaScript
const posts = [
  { title: "post 1", desc: "this is a desc" },
  { title: "post 2", desc: "this is a desc2" },
];

const postsHTML = posts.map((post, index) => {
  return `<article id="post-${index}>
    <h1>${post.title}<h1>
    <div>${post.title}<div>
  </article>`;
}).join('');
```

#### NOTE

Pretty much everything can be thought of as an object in JavaScript. **String** is no exception, as this has a set of **properties** and **methods** at your disposal.

#### Length Property

We can tell how many characters are in a string by accessing its **length** property.

*Note:* spaces and other hidden characters are valid characters and will contribute to the length.

```JavaScript
console.log( " Hello world!   ".length ); // 16
const userName = "Bender";
console.log( userName.length ); // 6

if( userName.length > 5 ){
  console.log(`Username is ${userName.length} characters long`);
  // "Username is 6 characters long"
}
```

#### toUpperCase

**.toLowerCase()** returns the calling string converting every alpha character to lowercase.

This is extremely useful when validating user input and data you may have an a database.

```JavaScript
const greeting = ' HellO HuMAn    ';
console.log( greeting.toLowerCase() ); // " hello human    "
```

#### toLowerCase

**.toUpperCase()** returns the calling string converting every alpha character to uppercase.

Another tool to ensure consistency when trying to validate strings.

```JavaScript
const greeting = ' HellO HuMAn    ';
console.log( greeting.toUpperCase() ); // " HELLO HUMAN    "
```

#### trim

**.trim()** removes any **leading** and **trailing** whitespace from the string.

**Whitespace** in this context is all invisible characters that add space to your string. **Space**, **tab**, **no-break space**, and all line terminator characters.

```JavaScript
const greeting = ' HellO HuMAn    ';
console.log( greeting.trim() ); // "HellO HuMAn"
```

#### Chainable

Most methods in JavaScript are **chainable**, meaning you can keep adding methods to the end of the line and the value will be passed into each sequentially.

```JavaScript
const greeting = ' HellO HuMAn    ';
console.log( greeting.trim().toLowerCase() ); // "hello human"
```

#### split

**.split()** turns the string into an **array of string** by separating the string into strings. 

How it's broken up is determined by the **separator string** provided as the **argument**.

```JavaScript
const date = "10-26-1997"; // Marlins first world series win
console.log( date.split('-') ); // ["10", "26", "1997"]

const name = "Bender Bending Rodriguez";
console.log( name.split(' ') ); // ["Bender", "Bending", "Rodriguez"]

const secretCode = "IMG:abcdefg:101010D:!@#$%^&*()";
console.log( secretCode.split(':') ); // ["IMG", "abcdefg", "101010D", "!@#$%^&*()"]
```

### Numbers

#### Definition

Currently, JavaScript has only **one type** of number. **Numbers** can be written **with** or **without** decimals and can be either **positive** or **negative**.

```JavaScript
const age = 123;
const height = -5.5;
const pi = 3.141;

console.log(age); // 123
console.log(height); // -5.5
console.log(pi); // 3.141
console.log(123e5); // 12300000
console.log(123e-5); // 0.00123
```

#### ParseInt

**.parseInt()** takes a string argument and returns an integer.

This method will convert the string to a whole number, regardless of decimals that might exist. If alpha characters will be ignored and will terminate the rest of that parse at first sign.

```JavaScript
const age = '123';
const height = '5.5';
const pi = '3.141';
const test1 = '123abc123';
const test2 = 'abc123';

console.log( parseInt(age) ); // 123
console.log( parseInt(height) ); // 5 
console.log( parseInt(pi) ); // 3
console.log( parseInt(test1) ); // 123
console.log( parseInt(test2) ); // NaN
```

#### ParseFloat

**.parseFloat()** takes a string argument and returns a decimal integer.

If alpha characters will be ignored and will terminate the rest of that parse at first sign.

```JavaScript
const age = '123';
const height = '5.5';
const pi = '3.141';
const test1 = '123.456abc123';
const test2 = 'abc123.456';

console.log( parseInt(age) ); // 123
console.log( parseInt(height) ); // 5.5
console.log( parseInt(pi) ); // 3.141
console.log( parseInt(test1) ); // 123.456
console.log( parseInt(test2) ); // NaN
```

#### Note

When pulling **anything** from an input field, it will be a **string**. Use either method when dealing with numerical user input.

#### ToFixed

**.toFixed()** formats a number to a desired decimal length. This method requires the number of decimals places you want as its only argument.

```JavaScript
const price = 23;
const numOne = 4;
const numTwo = 7;

console.log( price.toFixed(2) ); // "23.00"
console.log( numOne / numTwo ); // 0.5714285714285714
console.log( (numOne/numTwo).toFixed(4) ); // "0.5714"
```

### Coercion

#### Definition

**Coercion** is a way to change an entity from one **datatype** to **another**.

This is a controversial topic in JavaScript. Is this a flaw in the language? Is that a feature that should be embraced? Is it a little of both?

My stance is, it's a useful tool that should be embraced. It's one of my favorite things about the language, until it isn't.


```JavaScript
console.log( 10 + "10" ); // "1010"
console.log( "5" + 15 ); // "515"
console.log( 5 - "2"); // 3
console.log( "20" - "10"); // 10
console.log(['Hello', 'World'] + ['Glad', 'to', 'be', 'alive']); // "Hello,WorldGlad,to,be,alive"
console.log([6] - 2); // 4
console.log(['yes', 'yes'] - ['yall']); // NaN
console.log([5] * 10); // 50
console.log('50' / 10); // 5
```

Notice all the arithmetic operations kinda work as expected, except for one.

This is because the symbol used for addition is the same symbol used for concatenation.

As JavaScript developers we run into this all the time. When we get to the logic section, we will see how this plays out in a different way.

### Arrays

#### Definition

Consider the following code.

```JavaScript
const name1 = 'Fry';
const name2 = 'Leela'; 
const name3 = 'Bender';
const name4 = 'Professor';
const name5 = 'Hermies';
```

Creating variables is fine, but this can get out of hand quickly. Are you going to create a new variable for every character on that show? How would you search or sort them? How would you add or remove some programmatically?

Short answer, you can't. This is where arrays come into play.

**Arrays** are used to store **multiple values** iin a **single variable**.

Let's reconsider the previous example and make it an array.

```JavaScript
const characters = ['Fry', 'Leela', 'Bender', 'Professor', 'Hermies'];
```

You can access any item in the array by pointing it via its **index number**. 

#### Note

Array indexing starts a **zero**. The **first index** in the array reflects the **second item**.

#### Array Methods

As most things in JavaScript, **Arrays** are object like. Meaning, we have access to a set of **properties** and **methods** at our disposal.

We can break down each Array method into three categories.

- Accessors
- Iterators
- Muators

#### Accessors

These sets of methods do not modify the original array, instead they return some representation of the array in use.

There are a dozen or so methods one has access to, but we are going to explore the ones I tend to use most frequently in day to day work.

##### Includes

**.includes()** determines wether an array **includes the provided element**, returning **true** or **false** where appropriate.

```JavaScript
const characters = ['Fry', 'Leela', 'Bender', 'Professor', 'Hermies'];

console.log( characters.includes('Fry') ); // true
console.log( characters.includes('fry') ); // false
console.log( characters.includes('Professor') ); // true
console.log( characters.includes('Zapp') ); // false
```

##### IndexOf

**.indexOf()** returns the **first index** at which the provided element can be found in the array. If nothing is found, a **-1** will be returned.

```JavaScript
const characters = ['Fry', 'Leela', 'Bender', 'Professor', 'Hermies'];

console.log( characters.indexOf('Fry') ); // 0
console.log( characters.indexOf('fry') ); // -1
console.log( characters.indexOf('Professor') ); // 3
console.log( characters.indexOf('Zapp') ); // -1
```

##### Join

This method **joins** all the elements of an array into a **string**, separating the values by the provided **string separator**. If no separator is passed, then the items will be separated with commas.

```JavaScript
const characters = ['Fry', 'Leela', 'Bender', 'Professor', 'Hermies'];

console.log( characters.join() ); // "Fry,Leela,Bender,Professor,Hermies"
console.log( characters.join(' ') ); // "Fry Leela Bender Professor Hermies"
console.log( characters.join('--') ); // "Fry--Leela--Bender--Professor--Hermies"
```

##### Slice

This method returns a **shallow portion** of an array into a **new array**, selected from a **starting index** to an **ending index**, ending index not included. 

```JavaScript
const characters = ['Fry', 'Leela', 'Bender', 'Professor', 'Hermies'];

console.log( characters.slice(1, 4) ); // ["Leela", "Bender", "Professor"]
console.log( characters.slice(2, 2) ); // []
console.log( characters.slice(0, 3) ); // ["Fry", "Leela", "Bender"]****
```

#### Iterators

**Iterators** are a set of methods that **cycle through each item** in an array and **perform the action specified in the callback**.

There are a dozen or so methods one has access to, but we are going to explore ones that I use most frequently in my day to day work.

*Note:* Each callback will be passed these three arguments, regardless if they are used or not. **CurrentValue**, **index**, **Original Array**.

##### ForEach

**.forEach()** **executes** a provided function once for **each element** in the array.

```JavaScript
const characters = ['Fry', 'Leela', 'Bender', 'Professor', 'Hermies'];

characters.forEach( ( character ) => {
  console.log( character );
});
```

##### Map

**.map()** creates a **new array** with the results from the callback on every element in the array.

```JavaScript
const numbers = [1,2,3,4];
const doubles = numbers.map(x => x * 2);
console.log( numbers ); // [1,2,3,4]
console.log( doubles ); // [2,4,6,8]
```

```JavaScript
const todos = [
  { id: 1, name: 'Wake up', completed: true },
  { id: 2, name: 'Drink Coffee', completed: true },
  { id: 3, name: 'Code JavaScript', completed: false },
  { id: 4, name: 'Drink more coffee', completed: false }
];
const todoNames = todos.map(todo => todo.name);
console.log( todoNames ); // ["Wake up", "Drink Coffee", "Code JavaScript", "Drink more coffee"]
```

##### Filter

**.filter()** creates a new array with all the elements that **pass the test** in the provided callback.

```JavaScript
const characters = ['Fry', 'Leela', 'Bender', 'Professor', 'Hermies'];
const longNames = characters.filter(character => character.length > 5 );
console.log( characters );  // ["Fry", "Leela", "Bender", "Professor", "Hermies"]
console.log( longNames ); // ["Bender", "Professor", "Hermies"]
```

```JavaScript
var todos = [
  { id: 1, name: 'Wake up', completed: true },
  { id: 2, name: 'Drink Coffee', completed: true },
  { id: 3, name: 'Code JavaScript', completed: false },
  { id: 4, name: 'Drink more coffee', completed: false }
];
var stillTodo = todos.filter(todo => !todo.completed );
console.log( stillTodo ); // [{completed: false, id: 3, name: "Code JavaScript"}, {completed: false, id: 4, name: "Drink more coffee" }]
```

#### Mutators

**Mutators** are a set of methods that change the original array and returns the information what was changed.

There are a dozen or so methods we have access to, but we are going to explore ones I use most frequently in my day to day.

##### Pop

**.pop()** removes one item from the end of the array. Once the item is removed, it will return the element and change the length of the array.

```JavaScript
const characters = ['Fry', 'Leela', 'Bender', 'Professor', 'Hermies'];

console.log( characters.pop() ); //  "Hermies"
console.log( characters ); // ["Fry", "Leela", "Bender", "Professor"]
```

##### Push

**.push()** adds items to the end of an array. You can pass multiple items, separated by commas. Once the item(s) is added, the new length will be returned.

```JavaScript
const characters = ['Fry', 'Leela', 'Bender', 'Professor', 'Hermies'];

console.log( characters.push('Zapp') ); // 6
console.log( characters ); // ["Fry", "Leela", "Bender", "Professor", "Hermies", "Zapp"]
```

### Arithmetic

#### Definition Operators

### Assignment

#### Definition Operators

### Logic

#### Definition Operators

### Decision

#### Definition Making

### The

#### Definition DOM

### Events

#### Definition
