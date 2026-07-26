import React from "react";
import TaskItem from "./TaskItem";

function TaskList({
  tasks,
  deleteTask,
  toggleComplete,
  editTask,
}) {

  if (tasks.length === 0) {
    return (
      <h3 style={{ textAlign: "center" }}>
        No Tasks Available
      </h3>
    );
  }

  return (
    <div className="task-list">

      {tasks.map((task) => (

        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
          editTask={editTask}
        />

      ))}

    </div>
  );
}

export default TaskList;
