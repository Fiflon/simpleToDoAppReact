"use client";
import { useState } from "react";
import NewForm from "../../components/NewForm";
import NewTodoList from "../../components/NewTodoList";

export default function Home() {
  const [listOfTasks, setListOfTasks] = useState([]);

  function addNewTask(taskNewName) {
    setListOfTasks((currentListOfTasks) => {
      return [
        ...currentListOfTasks,
        {
          id: crypto.randomUUID(),
          nameOfTheTask: taskNewName,
          statusOfTask: false,
        },
      ];
    });
  }

  function toggleTask(id, statusOfTask) {
    setListOfTasks((currentListOfTasks) => {
      return currentListOfTasks.map((task) => {
        if (task.id === id) {
          return { ...task, statusOfTask };
        }

        return task;
      });
    });
  }

  function deleteTodo(id) {
    setListOfTasks((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <div>
        <h1>TodoApp</h1>

        <NewForm onSubmit={addNewTask} />
        <NewTodoList
          listOfTasks={listOfTasks}
          toggleTask={toggleTask}
          deleteTodo={deleteTodo}
        />
      </div>
    </>
  );
}
