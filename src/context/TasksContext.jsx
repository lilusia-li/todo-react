import { createContext, useState } from "react";
import { useTasks } from "../hooks/useTasks";
import tasksAPI from "../api/tasksAPI";

// console.log("Выполняется файл TasksContext");

export const TasksContext = createContext({});

export const TasksProvider = (props) => {
  // console.log("Использую TasksProvider (а значит и useTasks)");

  const { children } = props;

  const [searchQuery, setSearchQuery] = useState("");

  const { data, isTasksLoading } = useTasks({ searchQuery });
  const { tasks, doneTasks, totalTasks } = data;

  const deleteAlltasks = () => {
    const isConfirmed = confirm("Are you sure you want to delete all?");
    if (isConfirmed) tasksAPI.deleteAllTasks();
  };

  const deleteTask = async (taskId) => {
    await tasksAPI.deleteTask(tasks, taskId);
  };

  const toggleTaskComplete = async (taskId, isDone) => {
    await tasksAPI.toggleCompleteTask(taskId, isDone);
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        deleteTask,
        toggleTaskComplete,
        deleteAlltasks,
        doneTasks,
        totalTasks,
        isTasksLoading,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
