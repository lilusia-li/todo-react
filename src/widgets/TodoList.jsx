import TodoItem from "./TodoItem";
import { useContext } from "react";
import { FilteredTasksContext } from "../context/FilteredTasksContext";

const TodoList = () => {
  const { isTasksLoading, filteredTasks } = useContext(FilteredTasksContext);

  // const hasTasks = filteredTasks.length > 0;

  // if (!hasTasks) {
  //   return <div className="todo__empty-message">There are no tasks yet</div>;
  // }

  return (
    <div className="beautiful-height">
      <ul className="todo__list">
        {isTasksLoading ? (
          <div className="todo__loading-message">Loading...</div>
        ) : (
          filteredTasks.map((task) => (
            <TodoItem className="todo__item" key={task.id} {...task} />
          ))
        )}
      </ul>
    </div>
  );
};

export default TodoList;
