export default function addNewTask(taskNewName, { currentListOfTasks }) {
  const newTask = {
    id: crypto.randomUUID(),
    nameOfTheTask: taskNewName,
    statusOfTask: false,
  };

  setListOfTasks((currentListOfTasks) => {
    return [...currentListOfTasks, newTask];
  });
}
