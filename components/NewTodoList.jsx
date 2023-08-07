import NewTodoItem from "./NewTodoItem";

export default function NewTodoList({ listOfTasks, toggleTask, deleteTodo }) {
  return (
    <ul>
      {listOfTasks.map((task) => {
        return (
          <NewTodoItem
            id={task.id}
            nameOfTheTask={task.nameOfTheTask}
            statusOfTask={task.statusOfTask}
            key={task.id}
            toggleTask={toggleTask}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
