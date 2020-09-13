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

      return { ...state, todo: updatedTodo };
    case "ADD_TODO":
      updatedTodo = {
        text: action.payload,
        status: "open",
        id: uuidv4(),
      };
      return { ...state, todo: [...state.todo, updatedTodo] };

    case "UPDATE_TODO":
      updatedTodo = {
        ...state.currentToDo,
        text: action.payload,
      };
      const updatedToDoIndex = state.todo.findIndex(
        (eachTodo) => eachTodo.id === state.currentToDo.id
      );
      const updatedTodoReplace = [
        ...state.todo.slice(0, updatedToDoIndex),
        updatedTodo,
        ...state.todo.slice(updatedToDoIndex + 1),
      ];
      return {
        ...state,
        currentToDo: {},
        todo: updatedTodoReplace,
      };
    case "SET_CURRENT_TODO":
      return {
        ...state,
        currentToDo: action.payload,
      };
    default:
      return state;
  }
};

export default TodoReducer;
