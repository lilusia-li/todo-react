import { useContext, useState } from "react";
import { TasksContext } from "../context/TasksContext";
import { useTasksMutations } from "../hooks/useTasksMutations";
import Button from "../components/Button";
import Field from "../components/Field";
import { FilteredTasksContext } from "../context/FilteredTasksContext";

const AddTaskForm = () => {
  const [newTask, setNewTask] = useState("");
  const { setSearchQuery } = useContext(FilteredTasksContext);

  const { isTasksLoading } = useContext(TasksContext);
  const { addTask } = useTasksMutations();

  const onSubmit = (event) => {
    event.preventDefault();
    if (newTask.trim().length > 0) {
      addTask(newTask.trim());
      setNewTask("");
      setSearchQuery("");
    }
  };

  return (
    <form className="todo__form" onSubmit={onSubmit}>
      <Field
        className="todo__field"
        id="new-task"
        label="New task title"
        value={newTask}
        onInput={(event) => setNewTask(event.target.value)}
      />
      <Button type="submit" disabled={isTasksLoading}>
        Add
      </Button>
    </form>
  );
};

export default AddTaskForm;
