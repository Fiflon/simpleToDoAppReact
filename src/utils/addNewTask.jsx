export default function addNewTask(taskNewName, setListOfTasks) {
  setListOfTasks((currentListOfTasks) => {
    return [
      ...currentListOfTasks,
      {
        id: crypto.randomUUID(),
        nameOfTheTask: taskNewName,
        statusOfTask: false,
      },
    ];
  });
}
