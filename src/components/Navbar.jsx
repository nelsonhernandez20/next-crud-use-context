"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useTasks } from "@component/context/TasksContext";
function Navbar() {
  const { tasks } = useTasks();
  const router = useRouter();
  return (
    <header className="flex items-center justify-between bg-gray-800 md:px-28 px-10 py-3">
      <Link href="/">
        <h1 className="font-bold text-3xl text-white">Task App
        <span className="text-slate-300 text-sm ml-5">{tasks.length} tasks</span>
        </h1>
      </Link>
      <div>
        <button
          className="bg-green-500 hover:bg-green-400 px-5 py-2 text-gray-50 font-bold rounded-sm inline-flex items-center"
          onClick={() => router.push("/new")}
        >
          Add Task
        </button>
      </div>
    </header>
  );
}

export default Navbar;
