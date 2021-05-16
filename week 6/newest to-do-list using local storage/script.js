//selectors
const toDoInput = document.querySelector(".todo-input");
const toDoButton = document.querySelector(".todo-button");
const toDoList = document.querySelector(".todo-list");

//event listeners

toDoButton.addEventListener("click", addToDo);
toDoList.addEventListener("click", deleteCheck);

//functions

function addToDo(event) {
  event.preventDefault();

  const toDoDiv = document.createElement("div");
  toDoDiv.classList.add("todo");
  const newToDo = document.createElement("li");
  newToDo.innerText = toDoInput.value;
  newToDo.classList.add("todo-item");
  toDoDiv.appendChild(newToDo);

  const completedButton = document.createElement("button");
  completedButton.innerHTML = "<i class='fas fa-check'></i>";
  completedButton.classList.add("complete-btn");
  toDoDiv.appendChild(completedButton);

  const trashButton = document.createElement("button");
  trashButton.innerHTML = "<i class='fas fa-trash'></i>";
  trashButton.classList.add("trash-btn");
  toDoDiv.appendChild(trashButton);
  toDoList.append(toDoDiv);
  toDoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
}
