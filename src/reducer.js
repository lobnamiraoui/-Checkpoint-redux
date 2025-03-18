const initialState = {
    tasks: [],
    filter: "all", // all, completed, pending
  };
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TASK":
        return {
          ...state,
          tasks: [...state.tasks, { ...action.payload, id: Date.now(), isDone: false }],
        };
      case "TOGGLE_TASK":
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload
              ? { ...task, isDone: !task.isDone }
              : task
          ),
        };
      case "DELETE_TASK":
        return {
          ...state,
          tasks: state.tasks.filter((task) => task.id !== action.payload),
        };
      case "EDIT_TASK":
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload.id
              ? { ...task, description: action.payload.description }
              : task
          ),
        };
      case "FILTER_TASKS":
        return {
          ...state,
          filter: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default taskReducer;