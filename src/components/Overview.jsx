const Task = ({ tasks }) => {
  const taskList = tasks.map((task) => (
    <div className="flex flex-col space-y-1 items-center" key={task.taskname}>
      <h1>{task.taskname}</h1>
      <div className="flex flex-row ">
        <p className="p-50">{task.description}</p>
        <button className="bg-slate-400 w-20 ">Done</button>
      </div>
    </div>
  ));
  return <div className="flex flex-col space-y-5">{taskList}</div>;
};

export default Task;
