import { createContext, useContext, useState } from "react";
import { useFilteredTasks } from "../hooks/useFilteredTasks";
import { TasksContext } from "./TasksContext";

export const FilteredTasksContext = createContext({});

export const FilteredTasksProvider = (props) => {
  const { children } = props;

  const { tasks } = useContext(TasksContext);

  const [searchQuery, setSearchQuery] = useState("");

  const { filteredTasks, doneTasks, totalTasks, isTasksLoading } =
    useFilteredTasks({ searchQuery, tasks });

  return (
    <FilteredTasksContext.Provider
      value={{
        filteredTasks,
        doneTasks,
        totalTasks,
        isTasksLoading,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </FilteredTasksContext.Provider>
  );
};
