import { useState, useEffect } from "react";
import tasksAPI from "../api/tasksAPI";

export const useFilteredTasks = ({ searchQuery, tasks }) => {
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [isTasksLoading, setIsTasksLoading] = useState(false);

  useEffect(() => {
    async function fetchTasks() {
      setIsTasksLoading(true);
      const savedTasks = await tasksAPI.getFilteredTasks(searchQuery); //случай с пришедшим null не обработан
      setFilteredTasks(savedTasks);
      setIsTasksLoading(false);
    }

    fetchTasks();
  }, [searchQuery, tasks]);

  return {
    filteredTasks: filteredTasks,
    doneTasks: filteredTasks.filter((task) => task.isDone === true).length,
    totalTasks: filteredTasks.length,

    isTasksLoading,
  };
};
