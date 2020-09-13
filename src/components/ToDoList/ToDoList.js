import React, { useContext } from "react";
import TodoContext from "../../context";
import DeleteIcon from "../../assets/images/delete.svg";
import EditIcon from "../../assets/images/edit.svg";

const ToDoList = () => {
  const { state, dispatch } = useContext(TodoContext);

  return (
    <div className="container mx-auto max-w-d text-center font-mono">
      <div className="text-bold">
        {state.todo.length > 0 ? "Your to-do list" : "Nothing to do!"}
      </div>
      <br />
      <ul className="list-reset p-0">
        {state.todo.map((todo) => {
          return (
            <li
              key={todo.id}
              className="flex items-center bg-orange-dark border-black border-2 my-2 py-4"
            >
              <span
                className={`flex-1 ml-12 ${
                  todo.status === "completed" && "line-through"
                }`}
                onDoubleClick={() =>
                  dispatch({ type: "TOGGLE_TODO", payload: todo })
                }
              >
                {todo.text}
              </span>
              <button>
                <img
                  className="h-6 m-1 cursor-pointer"
                  alt="edit icon"
                  src={EditIcon}
                  onClick={() =>
                    dispatch({ type: "SET_CURRENT_TODO", payload: todo })
                  }
                />
              </button>
              <button>
                <img
                  className="h-6 m-1 cursor-pointer"
                  alt="delete icon"
                  src={DeleteIcon}
                  onClick={() =>
                    dispatch({ type: "DELETE_TODO", payload: todo })
                  }
                />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ToDoList;
