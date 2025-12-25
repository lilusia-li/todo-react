const TodoInfo = () => {
  return (
    <div className="todo__info">
      <div className="todo__total-tasks">
        Total Tasks: <span>0</span>
      </div>
      <button className="todo__delete-all-button" type="button">
        Delete All
      </button>
    </div>
  );
};

export default TodoInfo;
