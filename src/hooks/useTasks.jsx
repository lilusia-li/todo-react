import { useState, useEffect } from "react";
import tasksAPI from "../api/tasksAPI";

export const useTasks = ({ searchQuery }) => {
  // console.log("Использую useTasks");

  const [tasks, setTasks] = useState([]); //было undefined
  const [isTasksLoading, setIsTasksLoading] = useState(false);

  useEffect(() => {
    async function fetchTasks() {
      setIsTasksLoading(true);
      const savedTasks = await tasksAPI.getFilteredTasks(searchQuery); //случай с пришедшим null не обработан
      setTasks(savedTasks);
      setIsTasksLoading(false);
    }

    fetchTasks();
  }, [searchQuery]);

  return {
    data: {
      tasks: tasks,
      doneTasks: tasks.filter((task) => task.isDone === true).length,
      totalTasks: tasks.length,
    },
    isTasksLoading,
  };
};
