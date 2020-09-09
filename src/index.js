import React, { useContext, useReducer } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import TodoContext from "./context";
import TodoReducer from "./reducer";
import ToDoList from "./components/ToDoList/ToDoList";
import ToDoForm from "./components/ToDoForm/ToDoForm";

const App = () => {
  const initialState = useContext(TodoContext);
  const [state, dispatch] = useReducer(TodoReducer, initialState);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <ToDoForm />
      <ToDoList />
    </TodoContext.Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
