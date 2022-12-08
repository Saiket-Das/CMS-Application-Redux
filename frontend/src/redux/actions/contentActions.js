import { LOAD_CONTENT } from "../actionTypes/actionTypes";

export const loadContent = (content) => {
  return {
    type: LOAD_CONTENT,
    payload: content,
  };
};
