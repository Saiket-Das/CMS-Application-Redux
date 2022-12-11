import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import updateContentData from "../../redux/thunk/editContent";

const EditContent = () => {
  const { id } = useParams();

  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const submit = (data) => {
    const updatedContent = {
      //   title: data.title,
      //   image: data.image,
      //   body: data.body,
      ...(data.title && { title: data.title }),
      ...(data.image && { image: data.image }),
      ...(data.body && { title: data.body }),
    };
    dispatch(updateContentData(updatedContent, id));
  };

  return (
    <div className="flex justify-center items-center h-full ">
      <form
        className="shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white"
        onSubmit={handleSubmit(submit)}
      >
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="title">
            Content title
          </label>
          <input
            className="text-sm h-12"
            placeholder="Content title"
            type="text"
            id="title"
            {...register("title")}
          />
        </div>

        <div className="flex flex-col w-full max-w-xs ">
          <label className="mb-2" htmlFor="image">
            Image
          </label>
          <input
            className="text-sm h-12"
            placeholder="Image url"
            type="text"
            name="image"
            id="image"
            {...register("image")}
          />
        </div>

        <div className="flex flex-col w-full">
          <label className="mb-2" htmlFor="body">
            Content body
          </label>
          <textarea
            id="message"
            rows="4"
            name="body"
            className="block p-2.5 w-full text-sm "
            placeholder="Write your thoughts here..."
            {...register("body")}
          />
        </div>

        <div className="flex justify-between items-center w-full">
          <button
            className=" px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditContent;
