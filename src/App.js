import Task from "./components/Overview";
import "./index.css";
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
  {
    taskname: "Make a Frontend Task Application",
    description: "Use React for this one",
    status: true,
  },
  {
    taskname: "do 500 Push ups",
    description: "only use 1 finger",
    status: true,
  },
  {
    taskname: "Go on a diet",
    description: "be on a calorie deficit",
    status: true,
  },
];
function App() {
  return (
    <div>
      <Task tasks={taskList} />
    </div>
  );
}

export default App;
