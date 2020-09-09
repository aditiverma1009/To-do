import React, { useContext, useReducer } from "react";
import "./ToDo.scss";
import { UserContext } from "./index";

const ToDo = () => {
  const initialValue = {
    count: 0,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "reset":
        return initialValue;
      default:
        return initialValue;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialValue);
  const values = useContext(UserContext);
  return (
    <>
      <div>Dear {values.username}</div>
      <div>Count: {state.count}</div>
      <button
        className="border p-1 m-1"
        onClick={() => dispatch({ type: "increment" })}
      >
        INCREMENT
      </button>
      <button
        className="border p-1 m-1"
        onClick={() => dispatch({ type: "decrement" })}
      >
        DECREMENT
      </button>
      <button
        className="border p-1 m-1"
        onClick={() => dispatch({ type: "reset" })}
      >
        RESET
      </button>
    </>
  );
};

export default ToDo;
