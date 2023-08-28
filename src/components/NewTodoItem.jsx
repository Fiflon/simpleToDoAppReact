import Button from "./Button";
import Checkbox from "./Checkbox";

export default function NewTodoItem({
  id,
  statusOfTask,
  nameOfTheTask,
  toggleTask,
  deleteTodo,
  setListOfTasks,
}) {
  return (
    <li className="todoItemContainer">
      <div className="taskModule">
        <Checkbox
          checked={statusOfTask}
          onChange={(e) => toggleTask(id, e.target.checked)}
        ></Checkbox>
        {statusOfTask ? (
          <p className="doneTask">{nameOfTheTask}</p>
        ) : (
          <p>{nameOfTheTask}</p>
        )}
      </div>
      <Button
        className="buttonUsg"
        onClick={() => deleteTodo(id, setListOfTasks)}
      >
        delete
      </Button>
    </li>
  );
}
