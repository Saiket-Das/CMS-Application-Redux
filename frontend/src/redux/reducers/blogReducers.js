import {
  ADD_CONTENT,
  DELETE_CONTENT,
  LOAD_CONTENT,
} from "../actionTypes/actionTypes";

const initialState = {
  contents: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CONTENT:
      return {
        ...state,
        contents: action.payload,
      };

    case ADD_CONTENT:
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

export default productReducer;
