# Library

This project was built as part of The Odin Project: JavaScript course in order to practice what I've learned about JavaScript objects, constructor functions, and the _this_ keyword.

I later updated the project by refactoring the Book constructor function to instead use ES6 class syntax for simple practice.

I additionally later updated the project by writing logic in JavaScript for live inline form validation using the Constraint Validation API.

## Understand the Problem

It is a simple library application in which a user can add books to their collection, including information concerning the title, author, number of pages, and whether or not they have read the book yet. The added books will be displayed as "cards" on the screen for the user to see.

The user should be able to change a book's "read" status as well as remove books from the collection.

## Plan

The main focus of the app should be the cards – one card for each book added. There will be a button that allows the user to add a new book. This button will pull up a form contained within a modal dialog. Upon submission of the form, the user input will be taken and placed within a new card and added to the grid of cards.

The user input should be stored under the hood in an array of objects – one object per book, containing all relevant information.