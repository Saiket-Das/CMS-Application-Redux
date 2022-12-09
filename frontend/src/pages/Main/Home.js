import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import BlogCard from "../../components/BlogCard";
import { toggleCategory, toggleDate } from "../../redux/actions/filterActions";
// import BlogCard2 from "../../components/BlogCard2";
import loadContentData from "../../redux/thunk/fetchContents";

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const { contents } = state.content;
  const { date, cetagories } = state.filter.filters;

  useEffect(() => {
    dispatch(loadContentData());
  }, [dispatch]);

  const activeClass = "text-white  bg-indigo-500 border-white";

  let contentData;

  if (contents.length) {
    contentData = contents.map((content) => (
      <BlogCard key={content._id} content={content} />
    ));
  }

  if (contents.length && (date || cetagories.length)) {
    contentData = contents
      .filter((content) => {
        if (date) {
          return contents
            .reverse()
            .slice(content.length, 0)
            .reverse()
            .map((content, index) => (
              <BlogCard key={index} content={content} />
            ));
        }
        return content;
      })
      .filter((content) => {
        if (cetagories.length) {
          const value = content.cetagory.filter((ceta) =>
            cetagories.includes(ceta)
          );
          return cetagories.includes(value[0]);
        }
        return content;
      })

      .map((content) => <BlogCard key={content._id} content={content} />);
  }

  return (
    <div>
      <section className="">
        <div className="mb-10 flex justify-end gap-5 px-10">
          <button
            className={`border px-3 py-2 rounded-full font-semibold ${
              date && activeClass
            } `}
            onClick={() => dispatch(toggleDate("Date"))}
          >
            Date
          </button>
          <button
            className={`border px-3 py-2 rounded-full font-semibold  ${
              cetagories.includes("Travel") && activeClass
            }`}
            onClick={() => dispatch(toggleCategory("Travel"))}
          >
            Travel
          </button>
          <button
            className={`border px-3 py-2 rounded-full font-semibold  ${
              cetagories.includes("Food") && activeClass
            }`}
            onClick={() => dispatch(toggleCategory("Food"))}
          >
            Food
          </button>
          <button
            className={`border px-3 py-2 rounded-full font-semibold  ${
              cetagories.includes("Tech") && activeClass
            }`}
            onClick={() => dispatch(toggleCategory("Tech"))}
          >
            Tech
          </button>
          <button
            className={`border px-3 py-2 rounded-full font-semibold  ${
              cetagories.includes("News") && activeClass
            }`}
            onClick={() => dispatch(toggleCategory("News"))}
          >
            News
          </button>
        </div>
        <div className="container pt-5 px-10 mx-auto space-y-6 sm:space-y-12">
          {/* <BlogCard2 /> */}
          <div className=" grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {contentData}
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
