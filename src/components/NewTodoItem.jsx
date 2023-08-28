import Button from "./Button";
import Checkbox from "./Checkbox";

export default function NewTodoItem({
  id,
  statusOfTask,
  nameOfTheTask,
  toggleTask,
  deleteTask,
  setListOfTasks,
}) {
  return (
    <li className="todoItemContainer">
      <div className="taskModule">
        <Checkbox
          checked={statusOfTask}
          onChange={(e) => toggleTask(id, e.target.checked, setListOfTasks)}
        ></Checkbox>
        {statusOfTask ? (
          <p className="doneTask">{nameOfTheTask}</p>
        ) : (
          <p>{nameOfTheTask}</p>
        )}
      </div>
      <Button
        className="buttonUsg"
        onClick={() => deleteTask(id, setListOfTasks)}
      >
        delete
      </Button>
    </li>
  );
}
