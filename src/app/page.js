"use client";
import TaskCard from "@component/components/TaskCard";
import { useTasks } from "@component/context/TasksContext";
function Page() {
  const { tasks } = useTasks();
  console.log(tasks);
  return (
    <div className="flex justify-center">
      <div className="md:w-7/12 w-full">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default Page;
