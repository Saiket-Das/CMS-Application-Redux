import { createBrowserRouter } from "react-router-dom";

import Main from "../layout/Main/Main";
import Home from "../pages/Main/Home";
import Blog from "../pages/Main/Blog";
import BlogList from "../pages/Dashboard/BlogList";
import Dashboard from "../layout/Dashboard/Dashboard";

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
        element: <Blog />,
      },

      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "/dashboard",
            element: <BlogList />,
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
