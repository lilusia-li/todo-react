import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const { tasks = [], onDeleteTaskButtonClick, onTaskCompleteChange } = props;
  const hasTasks = tasks.length;

  if (!hasTasks) {
    return <div className="todo__empty-message"></div>;
  } else {
    return (
      <ul className="todo__list">
        {tasks.map((task) => (
          <TodoItem
            className="todo__item"
            key={task.id}
            {...task}
            onDeleteTaskButtonClick={onDeleteTaskButtonClick}
            onTaskCompleteChange={onTaskCompleteChange}
          />
        ))}
      </ul>
    );
  }
};

export default TodoList;
