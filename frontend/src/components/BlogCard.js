import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ content }) => {
  const { _id, title, body, image, categories, uploadDate } = content;

  return (
    <div>
      <section className="shadow-xl mb-10 rounded-xl">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12 hover:bg-slate-200">
          <Link
            to="/blog"
            rel="noopener noreferrer"
            href="#"
            className="max-w-sm mx-auto group "
          >
            <img
              role="presentation"
              className="object-cover w-full rounded h-56 dark:bg-gray-500"
              src={image}
              alt=""
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold">{title}</h3>
              <span className="text-xs">January 21, 2021</span>
              <p>{body.slice(0, 150)}</p>

              <div class="flex flex-wrap place-items-center pt-5">
                {categories.map((category) => (
                  <button class="p-2 pl-5 pr-5 mr-4 transition-colors duration-700 transform bg-indigo-500  text-gray-100 text-sm rounded-lg ">
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogCard;
