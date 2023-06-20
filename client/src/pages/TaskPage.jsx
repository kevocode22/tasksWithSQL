import { useEffect } from "react";
import TaskCard from "../components/TaskCard";
import { useTasks } from "../context/hooks";

function TaskPage() {
  const { tasks, loadTasks } = useTasks();

  useEffect(() => {
    loadTasks(); //eslint-disable-next-line
  }, []);

  function renderMain() {
    if (tasks.length === 0)
      return (
        <h1 className="text-center text-3xl font-['Handlee'] pt-14">
          No tasks yet..Try create one
        </h1>
      );
    const taskOrdered = tasks.sort((a, b) => Number(a.done) - Number(b.done));
    return taskOrdered.map((task) => <TaskCard task={task} key={task.id} />);
  }

  return (
    <>
      <h1 className="text-center text-4xl font-['Amatic_SC'] font-medium">
        My Tasks
      </h1>
      <div></div>
      <div className="p-5 font-semibold flex justify-center flex-wrap w-full">
        {renderMain()}
      </div>
    </>
  );
}
export default TaskPage;
