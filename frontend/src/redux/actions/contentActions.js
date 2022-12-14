import {
  DELETE_CONTENT,
  LOAD_CONTENT,
  POST_CONTENT,
  UPDATE_CONTENT,
} from "../actionTypes/actionTypes";

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

export const deleteContentById = (id) => {
  return {
    type: DELETE_CONTENT,
    payload: id,
  };
};

export const updateContentById = (updatedData) => {
  return {
    type: UPDATE_CONTENT,
    payload: updatedData,
  };
};
