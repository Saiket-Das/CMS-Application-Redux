import { TOGGLE_CATEGORY, TOGGLE_DATE } from "../actionTypes/actionTypes";

export const initialState = {
  filters: {
    cetagories: [],
    date: false,
  },
  keyword: "",
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CATEGORY: {
      if (state.filters.cetagories.includes(action.payload)) {
        return {
          ...state,
          filters: {
            ...state.filters,
            cetagories: state.filters.cetagories.filter(
              (category) => category !== action.payload
            ),
          },
        };
      }
      return {
        ...state,
        filters: {
          ...state.filters,
          cetagories: [...state.filters.cetagories, action.payload],
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
