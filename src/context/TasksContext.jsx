import { createContext, useState } from "react";
import tasksAPI from "../api/tasksAPI";

export const TasksContext = createContext({});

export const TasksProvider = (props) => {
  const { children } = props;

  const [tasks, setTasks] = useState([]);

  async function fetchTasks() {
    const savedTasks = await tasksAPI.getTasks();
    setTasks(savedTasks);
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
        fetchTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
