import { updateContentById } from "../actions/contentActions";

const updateContentData = (content, contentId) => {
  console.log(content, contentId);

  return async (dispatch, getState) => {
    const res = await fetch(`http://localhost:5000/api/content/${contentId}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(content),
    });
    const data = await res.json();

    console.log(data);

    // if (data.acknowledged) {
    //   dispatch(updateContentById(contentId));
    // }
  };
};

export default updateContentData;
