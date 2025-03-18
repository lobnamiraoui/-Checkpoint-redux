import { combineReducers } from "redux";
import taskReducer from "./reducers";

const rootReducer = combineReducers({
  taskState: taskReducer,
});

export default rootReducer;