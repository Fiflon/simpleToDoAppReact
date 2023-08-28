export default function deleteTask(id, setListOfTasks) {
  setListOfTasks((currentTodos) => {
    return currentTodos.filter((todo) => todo.id !== id);
  });
}
