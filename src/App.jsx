import Todo from "./widgets/Todo";
import { TasksProvider } from "./context/tasksContext";

// console.log("Выполняется файл App");

const App = () => {
  // console.log("Рендер App");

  return (
    <TasksProvider>
      <Todo />
    </TasksProvider>
  );
};

export default App;
