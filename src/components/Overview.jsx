const Task = ({ tasks }) => {
  const taskList = tasks.map((task) => (
    <div className="flex flex-col space-y-2 items-center " key={task.taskname}>
      <h1>{task.taskname}</h1>
      <div className="flex flex-col">
        <p className="p-50">{task.description}</p>
        <button className="bg-slate-400 w-50 ">Done</button>
      </div>
    </div>
  ));
  return <div className="flex flex-col space-y-5">{taskList}</div>;
};

export default Task;
