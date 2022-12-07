import React from "react";
import { Link } from "react-router-dom";

import BlogCard from "../../components/BlogCard";

const Home = () => {
  return (
    <div>
      <section className="">
        <div className="container pt-5 px-10 mx-auto space-y-6 sm:space-y-12">
          <Link
            to="/"
            rel="noopener noreferrer"
            href="#"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900"
          >
            <img
              alt=""
              src="https://source.unsplash.com/random/480x360"
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 "
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="mb-4 text-2xl text-white font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                Noster tincidunt reprimique ad pro
              </h3>
              <span className="text-xs text-gray-400">February 19, 2021</span>
              <p className="text-stone-300 font-light">
                Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est
                in graece fuisset, eos affert putent doctus id. Ei delenit
                sensibus liberavisse pri. Quod suscipit no nam. Est in graece
                fuisset, eos affert putent doctus id. Ei delenit sensibus
                liberavisse pri. Quod suscipit no nam. Est in graece fuisset,
                eos affert putent doctus id. Ei delenit sensibus liberavisse
                pri. Quod suscipit no nam. Est in graece fuisset, eos affert
                putent doctus id. Ei delenit sensibus liberavisse pri. Quod
                suscipit no nam. Est in graece fuisset, eos affert putent doctus
                id.
              </p>
            </div>
          </Link>

          <div className=" grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
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
