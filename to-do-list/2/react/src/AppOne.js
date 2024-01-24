import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(-1);
  const [editText, setEditText] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask.trim()]);
      setNewTask("");
    }
  };

  const startEdit = (index) => {
    setEditIndex(index);
    setEditText(tasks[index]);
  };

  const handleEditChange = (e) => {
    setEditText(e.target.value);
  };

  const saveEdit = () => {
    const updatedTasks = [...tasks];
    updatedTasks[editIndex] = editText.trim();
    setTasks(updatedTasks);
    setEditIndex(-1);
    setEditText("");
  };

  const cancelEdit = () => {
    setEditIndex(-1);
    setEditText("");
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
          <li key={index}>
            {editIndex === index ? (
              <input type="text" value={editText} onChange={handleEditChange} />
            ) : (
              <span>{task}</span>
            )}
            {editIndex === index ? (
              <>
                <button onClick={saveEdit}>Save</button>
                <button onClick={cancelEdit}>Cancel</button>
              </>
            ) : (
              <button onClick={() => startEdit(index)}>Edit</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
