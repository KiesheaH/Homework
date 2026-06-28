"use strict";

/* Tic Tac Toe Concepts - Coding Homework
These are standalone coding problems that practice the concepts you learned building
Tic Tac Toe. Don't overthink - build something simple that works first, then refactor.
*/

/* 1. Factory Functions & Module Pattern
1.1 Todo Item Factory
Create a factory function that makes todo items. Each todo should have:
  a. A task (string)
  b. Completed status (boolean, starts false)
  c. An ability to toggle its completed status
  d. A function to get its current state

Then, wrap it in an IIFE called TodoList that:
  e. Stores multiple todos internally (array)
  f. Has a method to add new todos
  g. Has a method to get all todos
  h. Has a method to mark a specific todo as complete

Constraints: You should NOT be able to directly access or modify the todos array
from outside the module.
*/

function Todo(task) {
  // use an array to store objects of tasks
  // each object should contain a name and status property
  // allow the status property to be able to be toggled
  // create a function that would store the current state
}

Todo("mop");
