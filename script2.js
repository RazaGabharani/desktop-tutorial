const addButton = document.querySelector("#addButton");
const taskText = document.getElementById("task-text");
const listMainContainer = document.querySelector(".list-container");

const savedToDos = JSON.parse(localStorage.getItem("myTodoList"));

const myTodoList = [];

const markTaskAsCompleted = (event) => {
  const isChecked = event.target.checked;
  const index = getIndex(event);

  if (isChecked) {
    // event.target.parentElement.classList = "list-row striked";
    event.target.parentElement.classList.add("striked");
  } else {
    // event.target.parentElement.classList = "list-row";
    event.target.parentElement.classList.remove("striked");
  }

  myTodoList[index].completed = isChecked;
  localStorage.setItem("myTodoList", JSON.stringify(myTodoList));
};

const addHtml = (text = "NA", isChecked = false) => {
  const newDiv = document.createElement("div");
  const newInput = document.createElement("input");
  const newText = document.createElement("p");
  const newRemoveButton = document.createElement("button");

  if (isChecked) {
    newDiv.classList.add("striked");
  } else {
    newDiv.classList.remove("striked");
  }

  newRemoveButton.addEventListener("click", handleRemove);

  newDiv.classList = "list-row";
  newInput.type = "checkbox";
  newInput.checked = isChecked;
  newInput.addEventListener("click", markTaskAsCompleted);
  newText.innerText = text;

  newRemoveButton.innerText = "x";
  newRemoveButton.classList = "close-button";

  newDiv.appendChild(newInput);
  newDiv.appendChild(newText);
  newDiv.appendChild(newRemoveButton);

  listMainContainer.appendChild(newDiv);
};

const getIndex = (event) => {
  const listItems = Array.from(listMainContainer?.children);
  const index = listItems.indexOf(event.target.parentElement);

  return index;
};

const handleRemove = (event) => {
  const index = getIndex(event);
  myTodoList.splice(index, 1);
  localStorage.setItem("myTodoList", JSON.stringify(myTodoList));
  event.target.parentElement.remove();
};

savedToDos?.forEach((todo) => {
  myTodoList.push(todo);
  addHtml(todo.text, todo.completed);
});

addButton.addEventListener("click", () => {
  const taskTextValue = taskText.value;

  if (taskTextValue.length === 0) {
    alert("Please type something....");
  }

  addHtml(taskTextValue, false);

  taskText.value = "";

  const data = {
    completed: false,
    text: taskTextValue,
  };

  myTodoList.push(data);
  localStorage.setItem("myTodoList", JSON.stringify(myTodoList));
});
