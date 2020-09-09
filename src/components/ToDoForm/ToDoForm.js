import React, { useContext, useState } from "react";
import TodoContext from "../../context";

const ToDoForm = () => {
  const [toDo, setToDo] = useState("");
  const { dispatch } = useContext(TodoContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_TODO", payload: toDo });
    setToDo("");
  };
  return (
    <form className="flex justify-center p-5" onSubmit={handleSubmit}>
      <input
        type="text"
        className="border-black border-2"
        onChange={(event) => setToDo(event.target.value)}
      />
    </form>
  );
};

export default ToDoForm;
