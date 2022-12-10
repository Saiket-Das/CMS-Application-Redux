import { LOAD_CONTENT, POST_CONTENT } from "../actionTypes/actionTypes";

export const loadContent = (content) => {
  return {
    type: LOAD_CONTENT,
    payload: content,
  };
};

export const postContent = (content) => {
  return {
    type: POST_CONTENT,
    payload: content,
  };
};
