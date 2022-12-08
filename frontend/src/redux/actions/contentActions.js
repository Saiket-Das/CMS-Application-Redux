import { LOAD_CONTENT } from "../actionTypes/actionTypes";

export const loadContent = (products) => {
  return {
    type: LOAD_CONTENT,
    payload: products,
  };
};
