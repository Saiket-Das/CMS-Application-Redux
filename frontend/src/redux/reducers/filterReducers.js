import { TOGGLE_CATEGORY, TOGGLE_DATE } from "../actionTypes/actionTypes";

export const initialState = {
  filters: {
    categories: [],
    date: false,
  },
  keyword: "",
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CATEGORY: {
      if (state.filters.categories.includes(action.payload)) {
        return {
          ...state,
          filters: {
            ...state.filters,
            categories: state.filters.categories.filter(
              (category) => category !== action.payload
            ),
          },
        };
      }
      return {
        ...state,
        filters: {
          ...state.filters,
          categories: [...state.filters.categories, action.payload],
        },
      };
    }

    case TOGGLE_DATE: {
      return {
        ...state,
        filters: {
          ...state.filters,
          date: !state.filters.date,
        },
      };
    }

    default:
      return state;
  }
};

export default filterReducer;
