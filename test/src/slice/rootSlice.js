import { combineReducers } from "redux";
import { articleReducers } from "./articleSlice";
import { commentReducers } from "./commentSlice";
import { boardReducers } from "./boardSlice";

const rootReducer = combineReducers({
  articleReducers, 
  boardReducers,
  commentReducers,
});

export default rootReducer;