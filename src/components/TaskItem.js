import React, { useState } from "react";

function TaskItem({
  task,
  deleteTask,
  toggleComplete,
  editTask,
}) {

  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(task.text);

  const saveTask = () => {

    if (text.trim() === "") return;

    editTask(task.id, text);
    setEditing(false);
  };

  return (
    <div
      className={`task-item ${
        task.completed ? "completed" : ""
      }`}
    >

      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
      />

      {editing ? (

        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

      ) : (

        <span>{task.text}</span>

      )}

      {editing ? (

        <button
          className="save-btn"
          onClick={saveTask}
        >
          Save
        </button>

      ) : (

        <button
          className="edit-btn"
          onClick={() => setEditing(true)}
        >
          Edit
        </button>

      )}

      <button
        className="delete-btn"
        onClick={() => deleteTask(task.id)}
      >
        Delete
      </button>

    </div>
  );
}

export default TaskItem;
