import React from "react";
import { Link } from "react-router-dom";

import { AiOutlineUnorderedList } from "react-icons/ai";
import { GrAdd } from "react-icons/gr";
import { IoIosArrowBack } from "react-icons/io";

import CustomLink from "../../components/CustomLink";

const Sidebar = () => {
  return (
    <div className="col-span-2 bg-indigo-200 h-[calc(100vh-150px)] p-5 rounded-lg">
      <ul className="flex gap-3  flex-col h-full">
        <li className="flex items-center mb-2">
          <AiOutlineUnorderedList className="mr-2" />
          <CustomLink to="/dashboard">Content List</CustomLink>
        </li>
        <li className="flex items-center">
          <GrAdd className="mr-2" />
          <CustomLink to="post-content">Post Content</CustomLink>
        </li>
        <li className="flex items-center mt-auto">
          <IoIosArrowBack className="mr-2" />

          <Link to="/"> Back to Home </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
