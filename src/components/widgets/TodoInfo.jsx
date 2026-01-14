import { useContext } from "react";
import { TasksContext } from "../../context/tasksContext";

const TodoInfo = () => {
  // console.log("Рендер TodoInfo");

  const { isTasksLoading, deleteAllTasks, doneTasks, totalTasks } =
    useContext(TasksContext);

  const hasTasks = totalTasks > 0;

  return (
    <div className="todo__info">
      <div className="todo__total-tasks">
        Done {doneTasks} from {totalTasks}
      </div>
      {hasTasks && !isTasksLoading && (
        <button
          className="todo__delete-all-button"
          type="button"
          onClick={deleteAllTasks}
        >
          Delete All
        </button>
      )}
    </div>
  );
};

export default TodoInfo;
