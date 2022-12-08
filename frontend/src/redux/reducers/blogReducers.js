import { ADD_CONTENT } from "../actionTypes/actionTypes";

export const addContent = (product) => {
  return {
    type: ADD_CONTENT,
    payload: product,
  };
};
