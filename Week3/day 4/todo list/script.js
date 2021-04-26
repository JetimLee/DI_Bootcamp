//my selectors
const toDoInput = document.querySelector(".todo-input");
const toDoButton = document.querySelector(".todo-button");
const toDoList = document.querySelector(".todo-list");

//my listeners

const addToDo = (event) => {
  event.preventDefault();
  console.log("hello");
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  const newToDo = document.createElement("li");
  newToDo.innerText = toDoInput.value;
  newToDo.classList.add("todo-item");
  todoDiv.appendChild(newToDo);
  const finishedButton = document.createElement("button");
  finishedButton.innerHTML = "<i class='fas fa-check'></i>";
  finishedButton.classList.add("finishedButton");
  todoDiv.appendChild(finishedButton);
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "<i class='fas fa-trash'></i>";
  deleteButton.classList.add("deleteButton");
  todoDiv.appendChild(deleteButton);
  toDoList.append(todoDiv);
  toDoInput.value = "";
};

const deleteAndCheck = (e) => {
  const activity = e.target;
  if (activity.classList[0] === "deleteButton") {
    const todo = activity.parentElement;
    todo.remove();
  }

  if (activity.classList[0] === "finishedButton") {
    const todo = activity.parentElement;
    todo.classList.toggle("complete");
  }
};

toDoList.addEventListener("click", deleteAndCheck);

toDoButton.addEventListener("click", addToDo);
//functions
