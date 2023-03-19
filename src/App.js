import Task from "./components/Overview";
import "./index.css";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const taskList = [
    {
      taskname: "Throw out Garbage",
      description: "Throw Out Garbage by 11pm",
      status: true,
    },
    {
      taskname: "Buy Groceries",
      description: "Shop for Groceries in Walmart",
      status: true,
    },
  ];
  const [list, setList] = useState(taskList);
  const [taskName, setTaskName] = useState("");
  const [taskDesc, setTaskDesc] = useState("");

  const handleClick = (event) => {
    event.preventDefault();
    let newList = [...taskList];

    const newTask = {
      taskname: taskName,
      description: taskDesc,
      status: true,
    };
    newList.push(newTask);
    setList(newList);
  };

  const handleChange = (event) => {
    if (event.target.className.includes("name")) {
      setTaskName(event.target.value);
    } else {
      setTaskDesc(event.target.value);
    }
  };
  return (
    <div className="space-y-5">
      <Task tasks={list} />
      <form className="flex flex-col justify-center space-y-3">
        <div className="flex flex-col flex-nowrap items-center space-y-2">
          <label htmlFor="add-task">Add Task</label>
          <div className="flex flex-col flex-nowrap w-full">
            <label htmlFor="add-task name">Task Name:</label>
            <input
              type="text"
              onChange={handleChange}
              className="add-task name border border-slate-900 w-full"
              value={taskName}
            />
          </div>
          <div className="flex flex-col flex-nowrap w-full">
            <label htmlFor="add-task description">Task Description:</label>
            <input
              type="text"
              onChange={handleChange}
              className="add-task description border border-slate-900 w-full"
              value={taskDesc}
            />
          </div>
        </div>
        <div className="flex justify-around">
          <Button type="Submit" text="Submit" handleClick={handleClick} />
          <Button type="Cancel" text="Cancel" handleClick={handleClick} />
        </div>
      </form>
    </div>
  );
}

export default App;
