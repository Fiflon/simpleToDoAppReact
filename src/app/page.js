"use client";
import GlobalStyles from "@/components/styled/Global";
import addNewTask from "@/utils/addNewTask";
import deleteTask from "@/utils/deleteTask";
import toggleTask from "@/utils/toggleTask";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import NewForm from "../components/NewForm";
import NewTodoList from "../components/NewTodoList";

const theme = {
  colors: {
    bgc: "#dff9fb",
    secondaryC: "#c7ecee",
    thirdC: "#95afc0",
    fourthC: "#535c68",
    newonceC: "#686de0",
  },
};

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
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
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
    </ThemeProvider>
  );
}
