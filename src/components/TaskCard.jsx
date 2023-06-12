import { useRouter } from "next/navigation";
import { useTasks } from "@component/context/TasksContext";
import { Toast, toast } from "react-hot-toast";
function TaskCard({ task }) {
  const router = useRouter();
  const { deleteTask } = useTasks();
  return (
    <div
      className="bg-gray-700 hover:bg-slate-600 cursor-pointer md:px-20 py-5 m-2 "
      onClick={() => router.push(`/edit/${task.id}`)}
    >
      <div className="flex justify-between">
        <h1 className="mx-2">{task.title}</h1>
        <button
          className="bg-red-700 hover:bg-red-600 px-3 py-1 inline-flex items-center mx-2"
          onClick={(e) => {
            e.stopPropagation();
            const accept = window.confirm(
              "estas seguro de eliminar esta tarea"
            );
            if (accept) {
              deleteTask(task.id);
              toast.success("Tarea Borrada correctamente");
            }
          }}
        >
          Delete
        </button>
      </div>
      <div className="flex w-full justify-start px-2">
        <p className="text-gray-300 text-start">{task.description}</p>
        {/* <span className="text-gray-400 text-xs">{task.id}</span> */}
      </div>
    </div>
  );
}

export default TaskCard;
