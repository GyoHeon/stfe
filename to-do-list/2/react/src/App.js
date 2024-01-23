import React, { useState } from "react";
import TodoItem from "./TodoItem";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    const taskText = newTask.trim();
    if (!taskText) return;

    setTasks([...tasks, { text: newTask.trim() }]);
    setNewTask("");
  };

  const updateTask = (index, newText) => {
    const newTasks = tasks.map((task, taskIndex) =>
      taskIndex === index ? { ...task, text: newText } : task
    );
    setTasks(newTasks);
  };

  return (
    <div id="todo-app">
      <input
        type="text"
        id="new-task"
        placeholder="Add a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button id="add-task" onClick={addTask}>
        Add
      </button>
      <ul id="tasks-list">
        {tasks.map((task, index) => (
          <TodoItem
            key={index}
            task={task}
            index={index}
            updateTask={updateTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
