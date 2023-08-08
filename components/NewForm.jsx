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
      <input
        type="text"
        onChange={onChangeHandler}
        value={taskNewName}
        placeholder="Add title..."
        className="inputTask"
      ></input>
      <button onClick={handleSubmit} className="buttonUsg width100">
        add task
      </button>
    </form>
  );
}
