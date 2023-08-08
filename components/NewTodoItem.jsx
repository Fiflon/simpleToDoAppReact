export default function NewTodoItem({
  id,
  statusOfTask,
  nameOfTheTask,
  toggleTask,
  deleteTodo,
}) {
  return (
    <li className="todoItemContainer">
      <div className="taskModule">
        <input
          type="checkbox"
          checked={statusOfTask}
          onChange={(e) => toggleTask(id, e.target.checked)}
        ></input>
        {statusOfTask ? (
          <p className="doneTask">{nameOfTheTask}</p>
        ) : (
          <p>{nameOfTheTask}</p>
        )}
      </div>
      <button className="buttonUsg" onClick={() => deleteTodo(id)}>
        delete
      </button>
    </li>
  );
}
