export default function deleteTodo(id, setListOfTasks) {
  setListOfTasks((currentTodos) => {
    return currentTodos.filter((todo) => todo.id !== id);
  });
}
