import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div>
      <section className="shadow-xl">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <Link
            to="/"
            rel="noopener noreferrer"
            href="#"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900"
          >
            <img
              role="presentation"
              className="object-cover w-full rounded h-56 dark:bg-gray-500"
              src="https://source.unsplash.com/random/480x360?1"
              alt=""
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                In usu laoreet repudiare legendos
              </h3>
              <span className="text-xs dark:text-gray-400">
                January 21, 2021
              </span>
              <p>
                Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                neglegentur, ex has tantas percipit perfecto. At per tempor.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogCard;
