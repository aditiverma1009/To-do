import { v4 as uuidv4 } from "uuid";

const TodoReducer = (state, action) => {
  let updatedTodo = [];
  switch (action.type) {
    case "TOGGLE_TODO":
      updatedTodo = state.todo.map((eachToDo) => {
        if (eachToDo.id === action.payload.id) {
          const currentStatus =
            eachToDo.status === "completed" ? "open" : "completed";
          return {
            ...action.payload,
            status: currentStatus,
          };
        } else {
          return eachToDo;
        }
      });
      return { ...state, todo: updatedTodo };
    case "DELETE_TODO":
      updatedTodo = state.todo.filter(
        (eachToDo) => eachToDo.id !== action.payload.id
      );

      return { todo: updatedTodo };
    case "ADD_TODO":
      updatedTodo = {
        text: action.payload,
        status: "open",
        id: uuidv4(),
      };
      return { todo: [...state.todo, updatedTodo] };
    default:
      return state;
  }
};

export default TodoReducer;
