import { createBrowserRouter } from "react-router-dom";

import Main from "../layout/Main/Main";
import Home from "../pages/Main/Home";
import Blog from "../pages/Main/Blog";

import Dashboard from "../layout/Dashboard/Dashboard";
import ContentList from "../pages/Dashboard/ContentList";
import PostContent from "../pages/Dashboard/PostContent";

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
            element: <ContentList />,
          },
          {
            path: "post-content",
            element: <PostContent />,
          },
        ],
      },
    ],
  },
]);

export default routes;
