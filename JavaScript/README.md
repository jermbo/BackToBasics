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

### Strings

#### Definition

### Numbers

#### Definition

### Coercion

#### Definition

### Arrays

#### Definition

#### Accessors

#### Iterators

#### Mutators

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
