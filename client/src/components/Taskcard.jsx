import { useTasks } from "../context/hooks";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "animate.css";

/*eslint-disable*/
function TaskCard({ task }) {
  const navigate = useNavigate();
  const { deleteTask, toggleTaskDone } = useTasks();
  const [toggleState, setToggleState] = useState(false);
  const dateTask = new Date(task.createdAt);

  const handleDone = async () => {
    await toggleTaskDone(task.id);
    setToggleState((toggleState) => !toggleState);
  };

  const toggleClassCheck = toggleState
    ? "animate__animated animate__fadeIn"
    : "";

  return (
    <div className="taskCards">
      <div className="bg-slate-700 p-2 m-4 rounded-md w-64">
        <header className="header flex justify-between">
          <h2 className="text-orange-500 text-2xl font-bold font-['Handlee'] truncate">
            {task.title}
          </h2>
          <span className={`${toggleClassCheck}`}>
            {task.done == 1 ? "️✅️" : "❌"}
          </span>
        </header>
        <span>{dateTask.toLocaleDateString()}</span>
        <div className="container mx-auto">
          <p className="truncate font-['Handlee'] text-md">
            {task.description}
          </p>
        </div>
        <div className="flex gap-1 text-sm justify-center items-center pt-20">
          <button
            className="bg-slate-800 text-md font-bold px-2 py-1 hover:animate-pulse"
            onClick={() => navigate(`/edit/${task.id}`)}
          >
            ✏️Edit
          </button>
          <button
            className="bg-red-500 text-md font-bold px-2 py-1 hover:animate-pulse"
            onClick={() => deleteTask(task.id)}
          >
            🗑️Delete
          </button>
          {task.done == 0 ? (
            <button
              className="bg-green-600 text-md font-bold px-2 py-1 hover:animate-pulse"
              onClick={() => handleDone(task.done)}
            >
              ✔️Done
            </button>
          ) : (
            <button
              className="bg-slate-500 text-md font-bold px-2 py-1 hover:animate-pulse"
              onClick={() => handleDone(task.done)}
            >
              ◀️Undo
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
