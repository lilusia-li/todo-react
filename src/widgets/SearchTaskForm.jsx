import { useContext } from "react";
import { FilteredTasksContext } from "../context/FilteredTasksContext";
import Field from "../components/Field";

const SearchTaskForm = () => {
  // console.log("Рендер SearchTaskForm");

  const { isTasksLoading, searchQuery, setSearchQuery } =
    useContext(FilteredTasksContext);

  return (
    <form className="todo__form" onSubmit={(event) => event.preventDefault()}>
      <Field
        className="todo__field"
        id="search-task"
        label="Search task"
        type="search"
        value={searchQuery}
        disabled={isTasksLoading}
        onInput={(event) => setSearchQuery(event.target.value)}
      />
    </form>
  );
};

export default SearchTaskForm;
