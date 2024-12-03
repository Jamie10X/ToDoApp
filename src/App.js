import React from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import SearchBar from "./components/SearchBar";
import TaskList from "./components/TaskList";

function App() {
  const [taskName, setTaskName] = React.useState("");
  const [searched, setSearch] = React.useState("");
  const [tasks, setTasks] = React.useState([]);
  
  const today = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();
  const week = new Date().getDay();

  const handleDelete = (taskToDelete) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.name !== taskToDelete.name)
    );
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

  const filteredTasks = searched
    ? tasks.filter((task) =>
        task.name.toLowerCase().includes(searched.toLowerCase())
      )
    : tasks;

  return (
    <div className="flex flex-col w-full h-full">
      <Header today={today} month={month} year={year} week={week} />
      <TaskForm
        taskName={taskName}
        setTaskName={setTaskName}
        handleSubmit={handleSubmit}
      />
      <div className="flex flex-col m-5 p-4 border border-blue-500 rounded-lg">
        <h2>To Do list 📆 📝</h2>
        <SearchBar searched={searched} setSearch={setSearch} />
        <TaskList
          tasks={filteredTasks}
          toggleStatus={toggleStatus}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default App;

