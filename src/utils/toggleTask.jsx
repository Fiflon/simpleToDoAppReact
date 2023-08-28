export default function toggleTask(id, statusOfTask, setListOfTasks) {
  setListOfTasks((currentListOfTasks) => {
    return currentListOfTasks.map((task) => {
      if (task.id === id) {
        return { ...task, statusOfTask };
      }

      return task;
    });
  });
}
