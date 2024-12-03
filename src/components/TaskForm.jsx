import React from "react";

function TaskForm({ taskName, setTaskName, handleSubmit }) {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-4 p-4 m-5 bg-gray-100 rounded-lg border border-blue-400"
    >
      <input
        type="text"
        placeholder="Enter task name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className="flex-grow p-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
      >
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;
