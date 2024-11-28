import React from "react";

function App() {
  const [taskName, setTaskName] = React.useState("");
  const [searched, setSearch] = React.useState("");
  const [tasks, setTasks] = React.useState([]);
  const week = new Date().getDay();
  const today = new Date().getDate();
  const month = new Date().getMonth() + 1; 
  const year = new Date().getFullYear();

  const handleDelete = (taskToDelete) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.name !== taskToDelete.name));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      const task = {
        name: taskName,
        status: false,
        date: `${year}. ${month}. ${today}.`,
      };
      setTasks((prevTasks) => [...prevTasks, task]);
      setTaskName(""); 
    }
  };

  const toggleStatus = (taskName) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.name === taskName ? { ...task, status: !task.status } : task
      )
    );
  };
  
  const filteredTasks = searched ? tasks.filter((task) => task.name.toLowerCase().includes(searched.toLowerCase())) : tasks;
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col m-5 p-4 border rounded-lg border-blue-400">
        <h2>
          📆 Today is {today}. {month}. {year}{" "}
          {week === 1 ? "Mon"
            : week === 2 ? "Tue"
            : week === 3 ? "Wed"
            : week === 4 ? "Thu"
            : week === 5 ? "Fri"
            : week === 6 ? "Sat"
             : "Sun"}
        </h2>
      </div>
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
      <div className="flex flex-col m-5 p-4 border border-blue-500 rounded-lg">
        <h2>To Do list 📆 📝</h2>
        <form className="mb-4">
          <input
            type="text"
            placeholder="Search from here"
            value={searched}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
          />
        </form>
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <div key={task.name} className="flex flex-row items-center p-5 border-b">
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
          ))
        ) : (
          <div>No tasks listed.</div>
        )}
      </div>
    </div>
  );
}

export default App;
