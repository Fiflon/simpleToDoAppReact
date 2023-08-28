import NewTodoItem from "./NewTodoItem";

export default function NewTodoList({
  listOfTasks,
  setListOfTasks,
  toggleTask,
  deleteTask,
}) {
  let length = listOfTasks.length;
  return (
    <>
      {length === 0 ? null : (
        <ul className="tasksListContainer">
          {listOfTasks.map((task) => (
            <NewTodoItem
              id={task.id}
              nameOfTheTask={task.nameOfTheTask}
              statusOfTask={task.statusOfTask}
              key={task.id}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
              setListOfTasks={setListOfTasks}
            />
          ))}
        </ul>
      )}
    </>
  );
}
