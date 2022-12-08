import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import BlogCard from "../../components/BlogCard";
import BlogCard2 from "../../components/BlogCard2";
import loadContentData from "../../redux/thunk/fetchContents";

const Home = () => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state);

  const { contents } = state.content;

  useEffect(() => {
    dispatch(loadContentData());
  }, [dispatch]);

  console.log(contents);

  return (
    <div>
      <section className="">
        <div className="mb-10 flex justify-end gap-5 px-10">
          <button className="border px-5 py-1 rounded-full font-semibold">
            Date
          </button>
          <button className="border px-5 py-1 rounded-full font-semibold">
            Travel
          </button>
          <button className="border px-5 py-1 rounded-full font-semibold">
            Food
          </button>
          <button className="border px-5 py-1 rounded-full font-semibold">
            Fashion
          </button>
          <button className="border px-5 py-1 rounded-full font-semibold">
            News
          </button>
        </div>
        <div className="container pt-5 px-10 mx-auto space-y-6 sm:space-y-12">
          <BlogCard2 />
          <div className=" grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>

          {/* <div className="flex justify-center">
            <button
              type="button"
              className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400"
            >
              Load more posts...
            </button>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Home;
