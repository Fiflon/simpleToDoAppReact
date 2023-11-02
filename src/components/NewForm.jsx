import { getRandomActivity } from "@/utils/getRandomActivityTask";
import { useState } from "react";

export default function NewForm({ onSubmit, setListOfObjects }) {
  const [taskNewName, setTaskNewName] = useState("");

  const onChangeHandler = (e) => {
    setTaskNewName(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (taskNewName === "") {
      return;
    }
    onSubmit(taskNewName, setListOfObjects);
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
        maxlength="100"
      ></input>
      <div className="buttonSection">
        <button onClick={handleSubmit} className="buttonUsg width50vw">
          add task
        </button>
        <button
          onClick={() => {
            getRandomActivity(setTaskNewName);
          }}
          type="button"
          className="buttonUsg width50vw"
        >
          Random
        </button>
      </div>
    </form>
  );
}
