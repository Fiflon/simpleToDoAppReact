import Button from "./Button";

export default function NewTodoItemDetails({
  id,
  statusOfTask,
  connectedPeople = [],
  deleteTask,
  setListOfTasks,
}) {
  let lengthOfConnectedPeople = connectedPeople.length;

  return (
    <div className="todoItemDetails">
      <div id="connectedPeople">
        {lengthOfConnectedPeople === 0 ? (
          <p>No people are connected with this task</p>
        ) : (
          <ul className="connectedPeopleListContainer">
            {connectedPeople.map((person) => (
              <li>{person}</li>
            ))}
          </ul>
        )}
      </div>
      {statusOfTask ? <p>Task completed</p> : <p>Task pending</p>}
      <Button
        className="buttonUsg"
        onClick={() => deleteTask(id, setListOfTasks)}
      >
        delete
      </Button>
    </div>
  );
}
