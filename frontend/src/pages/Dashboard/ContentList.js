import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import deleteProductById from "../../redux/thunk/deleteContent";
import loadContentData from "../../redux/thunk/fetchContents";

const ContentList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const { contents } = state.content;

  useEffect(() => {
    dispatch(loadContentData());
  }, [dispatch]);

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
              {contents.map((content) => (
                <tbody key={content._id}>
                  <tr className="bg-indigo-100">
                    <td className="p-3">
                      <p className="font-medium cursor-pointer hover:underline">
                        {content.title}
                      </p>
                    </td>
                    <td className="p-3">
                      {content.cetagory.map((ceta, index) => (
                        <span key={index} className="mr-2">
                          #{ceta}
                        </span>
                      ))}
                    </td>
                    <td className="p-3">11 Dec 2022</td>
                    <td className="p-3 flex">
                      <Link to="/" href="#" className="mx-2">
                        <i>
                          <button>Edit</button>
                        </i>
                      </Link>

                      <i>
                        <button
                          className="text-red-500"
                          onClick={() =>
                            dispatch(deleteProductById(content._id))
                          }
                        >
                          Delete
                        </button>
                      </i>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentList;
