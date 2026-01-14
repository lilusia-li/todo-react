const TASKS_KEY = "TASKS_DATA";

const tasksAPI = {
  _loadDataFromLocalStorage: async function () {
    return localStorage.getItem(TASKS_KEY);
  },

  getTasks: async function () {
    try {
      const savedTasks = await this._loadDataFromLocalStorage();

      if (savedTasks) {
        return JSON.parse(savedTasks);
      }
      return [];
    } catch (error) {
      console.warn("Error loading task list from localStorage:", error);
      return null;
    }
  },

  getFilteredTasks: async function (searchQuery) {
    const tasks = await this.getTasks();
    if (tasks) {
      const clearSearchQuery = searchQuery.trim().toLowerCase();
      return tasks.filter((task) =>
        task.title.toLowerCase().includes(clearSearchQuery)
      );
    }
    return null; //дальше не обработан этот случай
  },

  setTasks: async function (tasks) {
    try {
      localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
    } catch (error) {
      console.warn("Error loading task list to localStorage:", error);
    }
  },

  addTask: async function (newTaskTitle) {
    const newTask = {
      id: crypto?.randomUUID() ?? Date.now().toString(),
      title: newTaskTitle,
      isDone: false,
    };

    const tasks = await this.getTasks();
    if (tasks) {
      await this.setTasks([...tasks, newTask]);
    }
  },

  deleteTask: async function (taskId) {
    const tasks = await this.getTasks();
    if (tasks) {
      await this.setTasks(tasks.filter((task) => task.id !== taskId));
    }
  },

  deleteAllTasks: async function () {
    await this.setTasks([]);
  },

  toggleCompleteTask: async function (taskId, isDone) {
    const tasks = await this.getTasks();
    if (tasks) {
      await this.setTasks(
        tasks.map((task) => {
          if (task.id === taskId) {
            return { ...task, isDone };
          }
          return task;
        })
      );
    }
  },
};

export default tasksAPI;
