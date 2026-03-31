import { useContext } from "react";
import tasksAPI from "../api/tasksAPI";
import { TasksContext } from "../context/TasksContext";

export const useTasksMutations = () => {
  const { fetchTasks } = useContext(TasksContext);

  const addTask = async (newTask) => {
    tasksAPI.addTask(newTask);
    fetchTasks();
  };

  const deleteTask = async (id) => {
    tasksAPI.deleteTask(id);
    fetchTasks();
  };

  const toggleTaskComplete = async (id, newState) => {
    tasksAPI.toggleTaskComplete(id, newState);
    fetchTasks();
  };

  const deleteAllTasks = async () => {
    const isConfirmed = confirm("Are you sure you want to delete all?");
    if (isConfirmed) {
      tasksAPI.deleteAllTasks();
      fetchTasks();
    }
  };

  return {
    addTask,
    deleteTask,
    toggleTaskComplete,
    deleteAllTasks,
  };
};
