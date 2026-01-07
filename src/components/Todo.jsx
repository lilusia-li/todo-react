import { useState, useEffect } from "react";
import AddTaskForm from "./AddTaskForm";
import SearchTaskForm from "./SearchTaskForm";
import TodoInfo from "./TodoInfo";
import TodoList from "./TodoList";
import tasksAPI from "../api/tasksAPI";

const Todo = () => {
  const [tasks, setTasks] = useState(tasksAPI.getTasks());

  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const deleteAlltasks = () => {
    const isConfirmed = confirm("Are you sure you want to delete all?");
    if (isConfirmed) setTasks([]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasksAPI.deleteTask(tasks, taskId));
  };

  const toggleTaskComplete = (taskId, isDone) => {
    setTasks(tasksAPI.toggleCompleteTask(tasks, taskId, isDone));
  };

  const addTask = () => {
    if (newTaskTitle.trim().length > 0) {
      setTasks(tasksAPI.addTask(newTaskTitle, tasks));
      setNewTaskTitle("");
      setSearchQuery("");
    }
  };

  useEffect(() => {
    tasksAPI.setTasks(tasks);
  }, [tasks]);

  const filteredTasks = tasksAPI.getFilteredTasks(tasks, searchQuery);

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm
        addTask={addTask}
        newTaskTitle={newTaskTitle}
        setNewTaskTitle={setNewTaskTitle}
      />
      <SearchTaskForm
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <TodoInfo
        total={tasks.length}
        done={tasks.filter((task) => task.isDone === true).length}
        onDeleteAllButtonClick={deleteAlltasks}
      />
      <TodoList
        tasks={tasks}
        filteredTasks={filteredTasks}
        onDeleteTaskButtonClick={deleteTask}
        onTaskCompleteChange={toggleTaskComplete}
      />
    </div>
  );
};

export default Todo;
