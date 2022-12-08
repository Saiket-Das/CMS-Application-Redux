import React from "react";
import { Link } from "react-router-dom";

const BlogList = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-full w-full ">
        <div className="w-full max-w-7xl mx-auto rounded-lg  bg-white shadow-lg border border-gray-200">
          <div className="overflow-x-auto p-3">
            <table className="table-auto w-full border-separate ">
              <thead className="bg-indigo-200 ">
                <tr>
                  <th className="p-3">Title</th>
                  <th className="p-3 text-left">Category</th>
                  <th className="p-3 text-left">Date</th>
                  <th className="p-3 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-indigo-100">
                  <td className="p-3">
                    <div className="flex align-items-center">
                      <div className="ml-3">
                        <div className="font-medium cursor-pointer hover:underline">
                          How you can get 1M subs
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-3">Technology</td>
                  <td className="p-3">11 Dec 2022</td>
                  <td className="p-3 flex">
                    <Link to="/" href="#" className="mx-2">
                      <i>
                        <button>Edit</button>
                      </i>
                    </Link>

                    <i>
                      <button className="text-red-500">Delete</button>
                    </i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
