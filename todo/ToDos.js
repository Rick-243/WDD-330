import * as ls from './Ls.js';
import * as ut from './Utilities.js'

// select the todo-form
const todoForm = document.querySelector('.todo-form');
// select the input box
const todoInput = document.querySelector('.todo-input');
// select the <ul> with class="todo-items"
const todoItemsList = document.querySelector('.todo-items');
// select the All link in the footer with class="all"
const all = document.querySelector('.all');
// select the Active link in the footer
const active = document.querySelector('.active');
// select the Completed link in the footer
const complete = document.querySelector('.complete');

// array which stores every todos
let todos = [];
// add an eventListener on form, and listen for submit event
todoForm.addEventListener('submit', function(event) {
// prevent the page from reloading when submitting the form
event.preventDefault();
addTodo(todoInput.value); // call addTodo function with input box current value
});

// add event listeners on links and listen for submit event
// assign items the filter functions from utilities then call 
// renderTodos function to display appropriate arrays
all.addEventListener('click', function(event){
  event.preventDefault();
  let items = ut.filterAll();
  renderTodos(items);
});

active.addEventListener('click', function(event){
  event.preventDefault();
  let items = ut.filterActive();
  renderTodos(items);
});

complete.addEventListener('click', function(event){
  event.preventDefault();
  let items = ut.filterCompleted();
  renderTodos(items);
});

function addTodo(item){
    // if item is not empty
    if (item !== '') {
        // make a todo object, which has id, name, and completed properties
        const todo = {
          id: Date.now(),
          name: item,
          completed: false
        };

        // then add it to todos array
        todos.push(todo);
        
        ls.addToLocalStorage(todos); 
        renderTodos(todos);
        ut.showTasks();

        // finally clear the input box value
        todoInput.value = '';
    }   
}
function renderTodos(todos){
    // clear everything inside <ul> with class=todo-items
    todoItemsList.innerHTML = '';

    // run through each item inside todos
    todos.forEach(function(item) {
        // check if the item is completed
        const checked = item.completed ? 'checked': null;

        // create a <li> element and fill it
        const li = document.createElement('li');
        // <li class="item"> </li>
        li.setAttribute('class', 'item');
        li.setAttribute('data-key', item.id);
        // if item is completed, then add a class to <li> called 'checked', which will add line-through style
        if (item.completed === true) {
        li.classList.add('checked');
        }

        li.innerHTML = `
        <input type="checkbox" class="checkbox" ${checked}>
        ${item.name}
        <button class="delete-button">X</button>
        `;
        // finally add the <li> to the <ul>
        todoItemsList.append(li);
    });
}

function toggle(id) {
    todos.forEach(function(item) {
      // use == not ===, because here types are different. One is number and other is string
      if (item.id == id) {
        // toggle the value
        item.completed = !item.completed;
      }
    });
  
    ls.addToLocalStorage(todos);
}

// deletes a todo from todos array, then updates local storage and renders updated list to screen
function deleteTodo(id) {
    // filters out the <li> with the id and updates the todos array
    todos = todos.filter(function(item) {
        // use != not !==, because here types are different. One is number and other is string
        return item.id != id;
      });
      // update the localStorage
      ls.addToLocalStorage(todos);
      ut.showTasks();
}
// ls.getFromLocalStorage(); // where should I put this for it to work?

 // after that addEventListener <ul> with class=todoItems. Because we need to listen for click event in all delete-button and checkbox
todoItemsList.addEventListener('click', function(event) {
    // check if the event is on checkbox
    if (event.target.type === 'checkbox') {
      // toggle the state
      toggle(event.target.parentElement.getAttribute('data-key'));
      ut.showTasks();
    }
  
    // check if that is a delete-button
    if (event.target.classList.contains('delete-button')) {
      // get id from data-key attribute's value of parent <li> where the delete-button is present
      deleteTodo(event.target.parentElement.getAttribute('data-key'));
    }
    renderTodos(todos);
});

todos = ls.getFromLocalStorage();
renderTodos(todos);
ut.showTasks();
