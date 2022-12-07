import React from "react";
import { Link } from "react-router-dom";

const BlogCard2 = () => {
  return (
    <div>
      <Link
        to="/"
        rel="noopener noreferrer"
        href="#"
        className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 shadow-xl"
      >
        <img
          alt=""
          src="https://source.unsplash.com/random/480x360"
          className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 "
        />
        <div className="p-6 space-y-2 lg:col-span-5">
          <h3 className="mb-4 text-2xl  font-semibold sm:text-4xl group-hover:underline group-focus:underline">
            Noster tincidunt reprimique ad pro
          </h3>
          <span className="text-xs ">February 19, 2021</span>
          <p>
            Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in
            graece fuisset, eos affert putent doctus id. Ei delenit sensibus
            liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos
            affert putent doctus id. Ei delenit sensibus liberavisse pri. Quod
            suscipit no nam. Est in graece fuisset, eos affert putent doctus id.
            Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in
            graece fuisset, eos affert putent doctus id. Ei delenit sensibus
            liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos
            affert putent doctus id.
          </p>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard2;
