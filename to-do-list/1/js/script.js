document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("add-task");
  const newTaskInput = document.getElementById("new-task");
  const tasksList = document.getElementById("tasks-list");

  addButton.addEventListener("click", addTask);

  function addTask() {
    const taskText = newTaskInput.value.trim();
    if (!taskText) return;

    const listItem = document.createElement("li");
    listItem.textContent = taskText;
    tasksList.appendChild(listItem);
    newTaskInput.value = "";
    newTaskInput.focus();
  }
});
