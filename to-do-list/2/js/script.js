document.addEventListener("DOMContentLoaded", function () {
  const tasksList = document.getElementById("tasks-list");
  const newTaskInput = document.getElementById("new-task");
  const addTaskButton = document.getElementById("add-task");

  addTaskButton.addEventListener("click", function () {
    const taskText = newTaskInput.value.trim();
    if (!taskText) return;

    createTaskItem(taskText);
    newTaskInput.value = "";
  });

  function createTaskItem(text) {
    const listItem = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = text;
    listItem.appendChild(span);

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", function () {
      editTaskItem(listItem, span, text);
    });

    listItem.appendChild(editButton);
    tasksList.appendChild(listItem);
  }

  function editTaskItem(listItem, span, text) {
    const input = document.createElement("input");
    input.type = "text";
    input.value = text;
    listItem.insertBefore(input, span);
    listItem.removeChild(span);

    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.addEventListener("click", function () {
      span.textContent = input.value;
      listItem.insertBefore(span, input);
      listItem.removeChild(input);
      listItem.replaceChild(editButton, saveButton);
    });

    const editButton = listItem.querySelector("button");
    listItem.replaceChild(saveButton, editButton);
  }
});
