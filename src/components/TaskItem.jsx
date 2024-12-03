import React from "react";

function TaskItem({ task, toggleStatus, handleDelete }) {
  return (
    <div className="flex flex-row items-center p-5 border-b">
      <input
        type="checkbox"
        checked={task.status}
        onChange={() => toggleStatus(task.name)}
        className="mr-2"
      />
      <p className={task.status ? "line-through text-gray-500" : ""}>
        {task.name}
      </p>
      <p className="ml-auto">{task.date} 📆</p>
      <button
        className="ml-4 px-3 py-1 text-white bg-red-500 rounded-md hover:bg-red-600"
        onClick={() => handleDelete(task)}
      >
        Delete
      </button>
    </div>
  );
}

export default TaskItem;
