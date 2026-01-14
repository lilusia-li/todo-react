import { useState } from "react";
import { useContext } from "react";
import { TasksContext } from "../context/tasksContext";
import tasksAPI from "../api/tasksAPI";

export const useAddTask = () => {
  // console.log("Использую useAddTask");

  const [newTaskTitle, setNewTaskTitle] = useState("");

  const { setSearchQuery } = useContext(TasksContext);

  const addTask = async () => {
    if (newTaskTitle.trim().length > 0) {
      tasksAPI.addTask(newTaskTitle);
      setNewTaskTitle("");
      setSearchQuery("");
    }
  };

  const onSuccess = () => {
    // invalidateQuery();
  };

  return {
    mutateAsync: addTask,
    newTaskTitle: newTaskTitle,
    setNewTaskTitle: setNewTaskTitle,
  };
};
