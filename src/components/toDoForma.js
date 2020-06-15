import React, { useState } from "react";
import * as uuid from "uuid";

function ToDoForm(addTodo) {
  const [toDo, setToDo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  function handleTaskInputChange(e) {
    setToDo({ ...toDo, task: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (toDo.task.trim()) {
      addTodo({ ...toDo, id: uuid.v4() });
      setToDo({ ...toDo, task: "" });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="task"
        type="text"
        value={toDo.task}
        onChange={handleTaskInputChange}
      />

      <button type="submit">add</button>
    </form>
  );
}

export default ToDoForm;
