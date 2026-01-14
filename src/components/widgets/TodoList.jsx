import TodoItem from "./TodoItem";
import { useContext } from "react";
import { TasksContext } from "../../context/tasksContext";

const TodoList = () => {
  // console.log("Рендер TodoList");

  const { isTasksLoading, tasks } = useContext(TasksContext);

  const hasTasks = tasks.length > 0;

  if (!hasTasks) {
    return <div className="todo__empty-message">There are no tasks yet</div>;
  }

  return (
    <ul className="todo__list">
      {isTasksLoading ? (
        <div className="todo__loading-message">Loading...</div>
      ) : (
        tasks.map((task) => (
          <TodoItem className="todo__item" key={task.id} {...task} />
        ))
      )}
    </ul>
  );
};

export default TodoList;
