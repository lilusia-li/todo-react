import { useContext } from "react";
import { FilteredTasksContext } from "../context/FilteredTasksContext";
import { useTasksMutations } from "../hooks/useTasksMutations";

const TodoInfo = () => {
  const { isTasksLoading, doneTasks, totalTasks } =
    useContext(FilteredTasksContext);

  const { deleteAllTasks } = useTasksMutations();

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
