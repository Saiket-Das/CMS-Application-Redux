import { createBrowserRouter } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import Dashboard from "../layout/Dashboard/Dashboard";
import Main from "../layout/Main/Main";
import Home from "../pages/Main/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "blog",
        element: <BlogCard />,
      },

      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "/dashboard",
            element: <BlogCard />,
          },
          {
            path: "post-blog",
            element: <Home />,
          },
        ],
      },
    ],
  },
]);

export default routes;
