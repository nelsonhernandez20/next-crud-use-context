"use client";
import React, { useEffect } from "react";
import { useTasks } from "@component/context/TasksContext";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

function Page({ params }) {
  const { tasks, createTask, updateTask } = useTasks();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateTask(params.id, data);
      toast.success("Tarea actualizada correctamente");
    } else {
      createTask(data.title, data.description);
      toast.success("Tarea creada correctamente");
    }

    router.push("/");
  });

  useEffect(() => {
    if (params.id) {
      const taskFound = tasks.find((task) => task.id === params.id);
      if (taskFound) setValue("title", taskFound.title);
      if (taskFound) setValue("description", taskFound.description);
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-full">
      <form onSubmit={onSubmit} className="bg-gray-700 md:p-10 p-5">
        <h2 className="text-xl mb-2">Nueva Tarea</h2>
      <input className="bg-gray-800 py-3 md:px-4 px-1 mb-2 block focus:outline-none w-full"
        placeholder="write a title"
        {...register("title", { required: true })}
      />
      {errors.title && <span className="block text-red-400 mb-2">este campo es requerido</span>}
      <textarea
        className="bg-gray-800 py-3 md:px-4 px-1 mb-2 block focus:outline-none w-full"
        placeholder="write a description"
        {...register("description", { required: true })}
      />

      {errors.description && <span className="block text-red-400 mb-2">este campo es requerido</span>}
      <button className="bg-green-500 hover:bg-green-400 px-4 py-2 rounded-sm disabled:opacity-30">Save</button>
    </form>
    </div>
  );
}

export default Page;
