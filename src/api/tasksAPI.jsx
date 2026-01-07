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

  // addTask: (task) => {},

  // deleteTask: () => {},

  // deleteAllTasks: () => {},

  // toggleCompleteTask: () => {},
};

export default tasksAPI;
