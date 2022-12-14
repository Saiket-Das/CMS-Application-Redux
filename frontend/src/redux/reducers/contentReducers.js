import {
  POST_CONTENT,
  DELETE_CONTENT,
  LOAD_CONTENT,
  UPDATE_CONTENT,
} from "../actionTypes/actionTypes";

const initialState = {
  contents: [],
};

const contentReducers = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CONTENT:
      return {
        ...state,
        contents: action.payload,
      };

    case POST_CONTENT:
      return {
        ...state,
        contents: [...state.contents, action.payload],
      };

    case UPDATE_CONTENT:
      return {
        ...state,
        contents: [...state.contents, action.payload],
      };

    case DELETE_CONTENT:
      return {
        ...state,
        contents: state.contents.filter(
          (content) => content._id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default contentReducers;
