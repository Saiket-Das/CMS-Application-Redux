import { deleteContentById } from "../actions/contentActions";

const deleteProductById = (contentId) => {
  return async (dispatch, getState) => {
    const res = await fetch(`http://localhost:5000/api/content/${contentId}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();

    if (data.acknowledged) {
      dispatch(deleteContentById(contentId));
    }
  };
};

export default deleteProductById;
