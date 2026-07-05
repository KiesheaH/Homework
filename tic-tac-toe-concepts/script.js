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

Tests:
TodoList.addTodo("Learn closures");
TodoList.addTodo("Build a project");
TodoList.getTodos();
console.log(TodoList.todos); // undefined (that's correct!)


Solution:
const TodoList = (() => {
  // factory function to create todo list items
  function createTodo() {
    return {
      name: "",
      status: false,
      changeStatus() {
        this.status = !this.status;
      },
      getStatus() {
        return this.status;
      },
    };
  }

  // object to store todo list items
  const todos = [];

  // method to create a new todo item
  const addTodo = (task) => {
    let todo = createTodo();
    todo.name = task;

    for (let i = 0; i < todos.length; i++) {
      if (todos[i].name === task) {
        return `Todo item exist. Enter a valid item. `;
      }
    }
    todos.push(todo);
  };

  // method to get all todo items
  const getTodos = () => {
    return todos.slice();
  };

  // method that marks a specific task as complete
  const markComplete = (task) => {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].name === task) {
        todos[i].changeStatus();
      }
    }
  };

  return { addTodo, getTodos, markComplete };
})();

TodoList.addTodo("Learn closures");
TodoList.addTodo("Build a project");
TodoList.addTodo("Build a project");
TodoList.markComplete("Build a project");
console.log(TodoList.getTodos());
console.log(TodoList.todos); // undefined (that's correct!)
*/

/* 1.2: Bank Account Module
Create a module (IIFE) that simulates a bank account. It should:

  a. Store a balance internally
  b. Have a deposit(amount) function
  c. Have a withdraw(amount) function
  d. Have a getBalance() function
  e. Prevent the balance from going negative

Constraint: The balance should NOT be accessible from outside the module.

Test it:
BankAccount.deposit(100);
BankAccount.withdraw(30);
console.log(BankAccount.getBalance()); // 70

BankAccount.withdraw(100); // Should be rejected
console.log(BankAccount.getBalance()); // Still 70


const BankAccount = (() => {
  // stores the various transactions
  const transactions = [];

  // calculate account balance
  const calculateBalance = () => {
    return transactions.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }

  // deposit amount to the account
  const deposit = (amount) => {
    transactions.push(amount);
  }

  // deduct amount from account
  const withdraw = (amount) => {
    const currentBalance = calculateBalance();
    if(amount > currentBalance) {
      return `Rejected`
    }
    transactions.push(-amount);
  }

  // calculates and displays balance
  const getBalance = () => {
    return calculateBalance()
  }
  return { deposit, withdraw, getBalance }
})();



BankAccount.withdraw(50)
BankAccount.withdraw(100);
BankAccount.deposit(150)
console.log(BankAccount.getBalance()); // 70

BankAccount.withdraw(75); // Should be rejected
console.log(BankAccount.getBalance()); // Still 70
*/

/* 2. Separation of Concerns
2.1: Calculator with Display
  a. Build a simple calculator that separates:
    i. Calculation logic (add, subtract, multiply, divide)
    ii. Display logic (showing numbers on the page)

Structure:
const Calculator = (() => {
  let total = 0;
  
  // All your math logic here
  const add = (num) => { /* ... };
  const subtract = (num) => { /* ... };
  // etc.
  
  return { add, subtract, getTotal };
})();

const Display = (() => {
  const display = document.querySelector("#display");
  
  // All your DOM logic here
  const updateDisplay = (value) => { /* ...  };
  const handleButtonClick = (e) => { /* ... *};
  
  return { updateDisplay, init };
})();
*/

const Calculator = (() => {
  // keeps track of calculation
  let total = 0;

  // mathematical operations
  const add = (num) => {
    return total += num;
  }

  const subtract = (num) => {
    return total -= num;
  }

  const multiply = (num) => {
    return total *= num;
  }

  const divide = (num) => {
    return total /= num;
  }

  // gets the total value
  const getTotal = () => {
    return total;
  }

  return { add, subtract, multiply, divide, getTotal };
})()


const Display = (() => {
  const display = document.querySelector('#display')
})();



console.log(Calculator.add(3));
console.log(Calculator.add(3));
console.log(Calculator.multiply(5));
console.log(Calculator.divide(2));
console.log(Calculator.divide(4));