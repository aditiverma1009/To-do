import React, { useContext, useState, useEffect } from "react";
import TodoContext from "../../context";

const ToDoForm = () => {
  const [toDo, setToDo] = useState("");
  const {
    state: { currentToDo = {} },
    dispatch,
  } = useContext(TodoContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (currentToDo.text) {
      dispatch({ type: "UPDATE_TODO", payload: toDo });
    } else {
      dispatch({ type: "ADD_TODO", payload: toDo });
    }
    setToDo("");
  };

  useEffect(() => {
    if (currentToDo.text) {
      setToDo(currentToDo.text);
    } else {
      setToDo("");
    }
  }, [currentToDo.id]);

  return (
    <form className="flex justify-center p-5" onSubmit={handleSubmit}>
      <input
        value={toDo}
        type="text"
        className="border-black border-2"
        onChange={(event) => setToDo(event.target.value)}
      />
    </form>
  );
};

export default ToDoForm;
