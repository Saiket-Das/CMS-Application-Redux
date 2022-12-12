// Currying Function
// SNA = Store => Next => Action

import { LOAD_CONTENT } from "../actionTypes/actionTypes";

const contentCounter = (store) => (next) => (action) => {
  const state = store.getState();
  const content = state.content.contents;

  //   if (action.type === LOAD_CONTENT) {
  //     const newAction = {
  //       ...action,
  //       payload: { ...action.payload, contentPosition: content.length },
  //     };
  //     return next(newAction);
  //   }
  return next(action);
};

export default contentCounter;
