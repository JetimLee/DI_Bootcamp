//now to export to graph and have it display the information based on the local storage and my exported array.
//I have to export the things I want to export into graph.js and import them from that file

// select everything
// select the todo-form
const todoForm = document.querySelector(".todo-form");
// select the input box
const todoInput = document.querySelector(".todo-input");
// select the <ul> with class="todo-items"
const todoItemsList = document.querySelector(".todo-items");
const startDate = document.getElementById("start");
const endDate = document.getElementById("end");
const addButton = document.querySelector(".add-button");

//variables to be exported, they contain the task number and days
let chocolate = "I love chocolate";
let taskNumber = 0;
let arrayOfStartingDates = [];
let arrayOfEndingDates = [];
//

let todos = [];

addButton.addEventListener("click", function () {
  taskNumber++;
});

addButton.addEventListener("click", function () {
  let inputDate = startDate.valueAsDate;
  let day = inputDate.getDay();
  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const startingDate = {
    task: `${taskNumber}`,
    name: weekdays[day],
  };
  localStorage.setItem("startingDay", JSON.stringify(startingDate));
  arrayOfStartingDates.push(startingDate);
  console.log(arrayOfStartingDates);
  // localStorage.setItem("startDateArray", []);
  // let existing = localStorage.getItem("startDate");
  // existing = existing ? existing.split(",") : [];
  // existing.push(weekdays[day]);
  // localStorage.setItem("startDate", existing.toString());
  // console.log(existing);
  // console.log(localStorage);
});

addButton.addEventListener("click", function (e) {
  let inputDate = endDate.valueAsDate;
  let day = inputDate.getDay();
  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const endingDate = {
    task: `${taskNumber}`,
    name: weekdays[day],
  };
  localStorage.setItem("endingDay", JSON.stringify(endingDate));
  arrayOfEndingDates.push(endingDate);
  console.log(arrayOfEndingDates);
  // localStorage.setItem("endDateArray", []);
  // let existing = localStorage.getItem("endDate");
  // existing = existing ? existing.split(",") : [];
  // existing.push(weekdays[day]);
  // localStorage.setItem("endDate", existing.toString());
  // console.log(existing);
  // console.log(localStorage);
});

// array which stores every todos

// add an eventListener on form, and listen for submit event
todoForm.addEventListener("submit", function (event) {
  // prevent the page from reloading when submitting the form
  event.preventDefault();
  addTodo(todoInput.value); // call addTodo function with input box current value
});

// function to add todo
function addTodo(item) {
  // if item is not empty
  if (item !== "") {
    // make a todo object, which has id, name, and completed properties
    const todo = {
      id: Date.now(),
      name: item,
      completed: false,
      description: item,
    };

    // then add it to todos array
    todos.push(todo);
    addToLocalStorage(todos); // then store it in localStorage

    // finally clear the input box value
    todoInput.value = "";
  }
  console.log(localStorage);
}

// function to render given todos to screen
function renderTodos(todos) {
  // clear everything inside <ul> with class=todo-items
  todoItemsList.innerHTML = "";

  // run through each item inside todos
  todos.forEach(function (item) {
    // check if the item is completed
    const checked = item.completed ? "checked" : null;

    // make a <li> element and fill it
    // <li> </li>
    const li = document.createElement("li");
    // <li class="item"> </li>
    li.setAttribute("class", "item");
    // <li class="item" data-key="20200708"> </li>
    li.setAttribute("data-key", item.id);
    /* <li class="item" data-key="20200708"> 
          <input type="checkbox" class="checkbox">
          Go to Gym
          <button class="delete-button">X</button>
        </li> */
    // if item is completed, then add a class to <li> called 'checked', which will add line-through style
    if (item.completed === true) {
      li.classList.add("checked");
    }

    li.innerHTML = `
      <input type="checkbox" class="checkbox" ${checked}>
      ${item.name}
      <button class="delete-button">X</button>
    `;
    // finally add the <li> to the <ul>
    todoItemsList.append(li);
    showDate();
  });
}

// function to add todos to local storage
function addToLocalStorage(todos) {
  // conver the array to string then store it.
  localStorage.setItem("todos", JSON.stringify(todos));
  // render them to screen
  renderTodos(todos);
}

// function helps to get everything from local storage
function getFromLocalStorage() {
  const reference = localStorage.getItem("todos");
  // if reference exists
  if (reference) {
    // converts back to array and store it in todos array
    todos = JSON.parse(reference);
    renderTodos(todos);
  }
}

// toggle the value to completed and not completed
function toggle(id) {
  todos.forEach(function (item) {
    // use == not ===, because here types are different. One is number and other is string
    if (item.id == id) {
      // toggle the value
      item.completed = !item.completed;
    }
  });

  addToLocalStorage(todos);
}

function showDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = dd + "/" + mm + "/" + yyyy;
  let dateOfCreation = document.createElement("p");
  todoItemsList.append(dateOfCreation);
  dateOfCreation.innerText = today;
}

// deletes a todo from todos array, then updates localstorage and renders updated list to screen
function deleteTodo(id) {
  // filters out the <li> with the id and updates the todos array
  todos = todos.filter(function (item) {
    // use != not !==, because here types are different. One is number and other is string
    return item.id != id;
  });

  // update the localStorage
  addToLocalStorage(todos);
}

// initially get everything from localStorage
// getFromLocalStorage();

// after that addEventListener <ul> with class=todoItems. Because we need to listen for click event in all delete-button and checkbox
todoItemsList.addEventListener("click", function (event) {
  // check if the event is on checkbox
  if (event.target.type === "checkbox") {
    // toggle the state
    toggle(event.target.parentElement.getAttribute("data-key"));
  }

  // check if that is a delete-button
  if (event.target.classList.contains("delete-button")) {
    // get id from data-key attribute's value of parent <li> where the delete-button is present
    deleteTodo(event.target.parentElement.getAttribute("data-key"));
  }
});

//calendar stuff
