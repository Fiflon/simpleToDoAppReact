"use client";
import deleteTodo from "@/utils/deleteTask";
import { useEffect, useState } from "react";
import NewForm from "../components/NewForm";
import NewTodoList from "../components/NewTodoList";

export default function Home() {
  const [listOfTasks, setListOfTasks] = useState(() => {
    const localTasks = localStorage.getItem("TASKS");
    if (localTasks == null) {
      return [];
    }
    return JSON.parse(localTasks);
  });

  useEffect(() => {
    localStorage.setItem("TASKS", JSON.stringify(listOfTasks), [listOfTasks]);
  });

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

  /*   function deleteTodo(id) {
    setListOfTasks((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  } */

  return (
    <>
      <div id="container">
        <h1>TodoApp</h1>

        <NewForm onSubmit={addNewTask} className="inputFormContainer" />
        <NewTodoList
          listOfTasks={listOfTasks}
          setListOfTasks={setListOfTasks}
          toggleTask={toggleTask}
          deleteTodo={deleteTodo}
        />
      </div>
    </>
  );
}
