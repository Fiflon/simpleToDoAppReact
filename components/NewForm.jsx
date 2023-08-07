import { useState } from "react";

export default function NewForm({ onSubmit }) {
  const [taskNewName, setTaskNewName] = useState("");

  const onChangeHandler = (e) => {
    setTaskNewName(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (taskNewName === "") {
      return;
    }
    onSubmit(taskNewName);
    setTaskNewName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={onChangeHandler} value={taskNewName}></input>
      <button onClick={handleSubmit}>add task</button>
    </form>
  );
}
