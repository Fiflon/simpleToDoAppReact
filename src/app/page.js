"use client";
import addNewTask from "@/utils/addNewTask";
import deleteTask from "@/utils/deleteTask";
import toggleTask from "@/utils/toggleTask";
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

  return (
    <>
      <div id="container">
        <h1>TodoApp</h1>

        <NewForm
          onSubmit={addNewTask}
          setListOfObjects={setListOfTasks}
          className="inputFormContainer"
        />
        <NewTodoList
          listOfTasks={listOfTasks}
          setListOfTasks={setListOfTasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      </div>
    </>
  );
}
