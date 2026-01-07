const tasksAPI = {
  getTasks: () => {
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
      return JSON.parse(savedTasks);
    }

    return [
      {
        id: "task-1",
        isDone: true,
        title: "Погладить кота",
      },
      {
        id: "task-2",
        isDone: false,
        title: "Купить молоко",
      },
    ];
  },

  setTasks: (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  },

  addTask: (newTaskTitle, tasks) => {
    const newTask = {
      id: crypto?.randomUUID() ?? Date.now().toString(),
      title: newTaskTitle,
      isDone: false,
    };
    return [...tasks, newTask];
  },

  deleteTask: (tasks, taskId) => {
    return tasks.filter((task) => task.id !== taskId);
  },

  // deleteAllTasks: () => {},

  toggleCompleteTask: (tasks, taskId, isDone) => {
    return tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isDone };
      }
      return task;
    });
  },

  getFilteredTasks: (tasks, searchQuery) => {
    const clearSearchQuery = searchQuery.trim().toLowerCase();
    return clearSearchQuery.length > 0
      ? tasks.filter((task) =>
          task.title.toLowerCase().includes(clearSearchQuery)
        )
      : null;
  },
};

export default tasksAPI;
