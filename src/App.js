import React, { useState, useEffect } from "react";
import "./App.css";

import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("Newest");

  // Load tasks from Local Storage
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));

    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  // Save tasks whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add Task
  const addTask = (text) => {
    if (!text.trim()) return;

    const newTask = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setTasks([newTask, ...tasks]);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Complete
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  // Edit Task
  const editTask = (id, updatedText) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, text: updatedText }
          : task
      )
    );
  };

  // Filter Tasks
  const filteredTasks = tasks.filter((task) => {
    if (filter === "Completed") return task.completed;
    if (filter === "Active") return !task.completed;
    return true;
  });

  // Sort Tasks
  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sortOrder === "Newest") {
      return b.id - a.id;
    } else {
      return a.id - b.id;
    }
  });

  return (
    <div className="container">
      <h1>📝 React Task Manager</h1>

      <TaskInput addTask={addTask} />

      <div className="controls">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option>All</option>
          <option>Active</option>
          <option>Completed</option>
        </select>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option>Newest</option>
          <option>Oldest</option>
        </select>
      </div>

      <TaskList
        tasks={sortedTasks}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
        editTask={editTask}
      />

      <div className="footer">
        <p>Total Tasks : {tasks.length}</p>
        <p>
          Completed :
          {" "}
          {tasks.filter((task) => task.completed).length}
        </p>
      </div>
    </div>
  );
}

export default App;
