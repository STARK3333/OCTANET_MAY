const addButton = document.getElementById("addButton");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const markAllButton = document.getElementById("markAllButton");
const deleteAllButton = document.getElementById("deleteAllButton");
addButton.addEventListener("click", function () {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskItem = document.createElement("li");
    taskItem.className = "taskItem";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const taskTextElement = document.createElement("span");
    taskTextElement.innerText = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";

    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskTextElement);
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);

    taskInput.value = "";
  }
});
taskList.addEventListener("change", function (event) {
  if (event.target.type === "checkbox") {
    const taskItem = event.target.parentNode;
    taskItem.classList.toggle("completed");
  }
});
taskList.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    const taskItem = event.target.parentNode;
    taskList.removeChild(taskItem);
  }
});
markAllButton.addEventListener("click", function () {
  const checkboxes = taskList.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(function (checkbox) {
    checkbox.checked = true;
    checkbox.parentNode.classList.add("completed");
  });
});
deleteAllButton.addEventListener("click", function () {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
});
