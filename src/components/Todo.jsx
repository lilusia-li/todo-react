import AddTaskForm from "./AddTaskForm";
import SearchTaskForm from "./SearchTaskForm";
import TodoInfo from "./TodoInfo";
import TodoList from "./TodoList";

const Todo = () => {
  const tasks = [
    {
      id: "task-1",
      isDone: true,
      title: "Погладить кота",
    },
    {
      id: "task-2",
      isDone: false,
      title: "Купить молоко",
    },
  ];
  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm />
      <SearchTaskForm />
      <TodoInfo
        total={tasks.length}
        done={tasks.filter((task) => task.isDone === true).length}
      />
      <TodoList tasks={tasks} />
    </div>
  );
};

export default Todo;
