import { useState } from "react";
import Button from "./Button";
import Checkbox from "./Checkbox";
import NewTodoItemDetails from "./TodoItemDetails";

export default function NewTodoItem({
  id,
  statusOfTask,
  nameOfTheTask,
  toggleTask,
  deleteTask,
  setListOfTasks,
}) {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle((pre) => !pre);
  };
  return (
    <li className="todoItemContainer">
      <div className="taskModule">
        <div className="taskPreview">
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
        <Button className="buttonUsg" onClick={handleToggle}>
          rozwin
        </Button>
      </div>
      {toggle && (
        <NewTodoItemDetails
          id={id}
          statusOfTask={statusOfTask}
          deleteTask={deleteTask}
          setListOfTasks={setListOfTasks}
        ></NewTodoItemDetails>
      )}
    </li>
  );
}
