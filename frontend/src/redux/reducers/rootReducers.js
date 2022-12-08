import { combineReducers } from "redux";
import contentReducers from "./contentReducers";
import filterReducer from "./filterReducers";

const rootReducers = combineReducers({
  content: contentReducers,
  filter: filterReducer,
});

export default rootReducers;
