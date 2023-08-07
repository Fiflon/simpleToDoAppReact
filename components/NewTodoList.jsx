import NewTodoItem from "./NewTodoItem";

export default function NewTodoList({ listOfTasks, toggleTask, deleteTodo }) {
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
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
      )}
    </>
  );
}
