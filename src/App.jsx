import Todo from "./widgets/Todo";
import { TasksProvider } from "./context/TasksContext";
import { FilteredTasksProvider } from "./context/FilteredTasksContext";

const App = () => {
  return (
    <TasksProvider>
      <FilteredTasksProvider>
        <Todo />
      </FilteredTasksProvider>
    </TasksProvider>
  );
};

export default App;
