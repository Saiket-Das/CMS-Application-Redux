import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import rootReducers from "./reducers/rootReducers";
import contentCounter from "./middlewares/contentCounter";

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(contentCounter, thunk))
);

export default store;
