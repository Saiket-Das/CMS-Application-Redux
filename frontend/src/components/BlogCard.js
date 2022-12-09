import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ content }) => {
  const { title, body, image, cetagory, uploadDate } = content;

  const date = new Date(uploadDate);

  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  const convertedDate = day + " " + month + " " + year;

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
              <span className="text-xs">{convertedDate}</span>
              <p>{body.slice(0, 150)}</p>

              <div className="flex flex-wrap place-items-center pt-5">
                {cetagory.map((category, index) => (
                  <button
                    key={index}
                    type="button"
                    className="relative px-8 py-2 ml-4 overflow-hidden font-semibold rounded bg-indigo-300"
                  >
                    {category}
                    <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 dark:bg-violet-400">
                      #
                    </span>
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
