import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import postContentData from "../../redux/thunk/postContent";

const PostContent = () => {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const submit = (data) => {
    let cetagories = [];

    if (data.hastag1) cetagories.push(data.hastag1);

    if (data.hastag2) cetagories.push(data.hastag2);

    if (data.hastag3) cetagories.push(data.hastag3);

    if (data.hastag4) cetagories.push(data.hastag4);

    const content = {
      title: data.title,
      image: data.image,
      body: data.body,
      cetagory: cetagories,
      uploadDate: Date.now(),
    };
    // console.log(content);

    dispatch(postContentData(content));
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

        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="hastag1">
            Cetagory 1
          </label>
          <input
            placeholder="Type content cetagory"
            className="text-sm h-12"
            type="text"
            name="hastag1"
            id="hastag1"
            {...register("hastag1")}
          />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="hastag2">
            Cetagory 2
          </label>
          <input
            placeholder="Type content cetagory"
            className="text-sm h-12"
            type="text"
            name="hastag2"
            id="hastag2"
            {...register("hastag2")}
          />
        </div>

        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="hastag3">
            Cetagory 3
          </label>
          <input
            placeholder="Type content cetagory"
            className="text-sm h-12"
            type="text"
            name="hastag3"
            id="hastag3"
            {...register("hastag3")}
          />
        </div>

        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="hastag4">
            Cetagory 4
          </label>
          <input
            placeholder="Type content cetagory"
            className="text-sm h-12"
            type="text"
            name="hastag4"
            id="hastag4"
            {...register("hastag4")}
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

export default PostContent;
