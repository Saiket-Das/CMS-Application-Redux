import { postContent } from "../actions/contentActions";

const postContentData = (content) => {
  return async (dispatch, getState) => {
    const res = await fetch("http://localhost:5000/api/content", {
      method: "POST",
      body: JSON.stringify(content),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();

    if (data.acknowledged) {
      console.log(data.acknowledged);
      dispatch(postContent({ _id: data.insertedId, ...content }));
    }
  };
};

export default postContentData;
