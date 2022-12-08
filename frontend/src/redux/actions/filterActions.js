import { TOGGLE_CATEGORY, TOGGLE_DATE } from "../actionTypes/actionTypes";

export const toggleDate = () => {
  return {
    type: TOGGLE_DATE,
  };
};

export const toggleCategory = (category) => {
  return {
    type: TOGGLE_CATEGORY,
    payload: category,
  };
};
