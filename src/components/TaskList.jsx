import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, toggleStatus, handleDelete }) {
  return (
    tasks.length > 0 ? (
      tasks.map((task) => (
        <TaskItem
          key={task.name}
          task={task}
          toggleStatus={toggleStatus}
          handleDelete={handleDelete}
        />
      ))
    ) : (
      <div>No tasks listed.</div>
    )
  );
}

export default TaskList;
