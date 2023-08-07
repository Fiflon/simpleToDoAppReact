export default function NewTodoItem({
  id,
  statusOfTask,
  nameOfTheTask,
  toggleTask,
  deleteTodo,
}) {
  return (
    <li>
      <input
        type="checkbox"
        checked={statusOfTask}
        onChange={(e) => toggleTask(id, e.target.checked)}
      ></input>
      {statusOfTask === true ? (
        <p style={{ textDecoration: "line-through" }}>{nameOfTheTask}</p>
      ) : (
        <p>{nameOfTheTask}</p>
      )}

      <button onClick={() => deleteTodo(id)}>delete</button>
    </li>
  );
}
