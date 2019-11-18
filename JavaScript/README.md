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

#### Exercise

In file `01-vars/start/vars.js`, you will see a series of variables that need names. Change the `var` key word to an appropriate `let` or `const` and create meaningful names.

### Functions

### Scope

### Objects

### Strings

### Numbers

### Coercion

### Arrays

#### Accessors

#### Iterators

#### Mutators

### Arithmetic Operators

### Assignment Operators

### Logic Operators

### Decision Making

### The DOM

### Events