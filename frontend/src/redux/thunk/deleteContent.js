import { deleteContentById } from "../actions/contentActions";

const deleteProductById = (productId) => {
  return async (dispatch, getState) => {
    const res = await fetch(`http://localhost:5000/api/content/${productId}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();

    if (data.acknowledged) {
      dispatch(deleteContentById(productId));
    }
  };
};

export default deleteProductById;
