import React from "react";
import { Link } from "react-router-dom";

import { AiOutlineEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

const BlogList = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-full w-full ">
        <div className="w-full max-w-7xl mx-auto rounded-lg  bg-white shadow-lg border border-gray-200">
          <div className="overflow-x-auto p-3">
            <table class="table-auto w-full border-separate ">
              <thead class="bg-indigo-200 ">
                <tr>
                  <th class="p-3">Title</th>
                  <th class="p-3 text-left">Category</th>
                  <th class="p-3 text-left">Date</th>
                  <th class="p-3 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-indigo-100">
                  <td class="p-3">
                    <div class="flex align-items-center">
                      <div class="ml-3">
                        <div class="">How you can get 1M subs</div>
                      </div>
                    </div>
                  </td>
                  <td class="p-3">Technology</td>
                  <td class="p-3">11 Dec 2022</td>
                  <td class="p-3 flex">
                    <Link to="/" href="#" class="   mx-2">
                      <i class="material-icons-outlined text-base">
                        <AiOutlineEdit />
                      </i>
                    </Link>

                    <i class="material-icons-round text-base">
                      <MdDelete />
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
