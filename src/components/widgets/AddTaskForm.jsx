import { useContext } from "react";
import { TasksContext } from "../../context/tasksContext";
import { useAddTask } from "../../hooks/useAddTask";
import Button from "../Button";
import Field from "../Field";

const AddTaskForm = () => {
  // console.log("Рендер AddTaskForm");

  const { isTasksLoading } = useContext(TasksContext);
  const { mutateAsync: addTask, newTaskTitle, setNewTaskTitle } = useAddTask();

  const onSubmit = (event) => {
    event.preventDefault();
    addTask();
  };
  return (
    <form className="todo__form" onSubmit={onSubmit}>
      <Field
        className="todo__field"
        id="new-task"
        label="New task title"
        value={newTaskTitle}
        onInput={(event) => setNewTaskTitle(event.target.value)}
      />
      <Button type="submit" disabled={isTasksLoading}>
        Add
      </Button>
    </form>
  );
};

export default AddTaskForm;
