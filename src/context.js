import React from "react";

const initialContext = {
  todo: [
    { id: 1, text: "To write a blog", status: "completed" },
    { id: 2, text: "To give a talk", status: "completed" },
    { id: 3, text: "To publish doc", status: "open" },
  ],
  currentToDo: {},
};
const TodoContext = React.createContext(initialContext);
export default TodoContext;
