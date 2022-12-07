import { createBrowserRouter } from "react-router-dom";
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
    ],
  },
  {
    path: "/dashboard",
    element: <Home />,
    children: [
      {
        path: "/dashboard",
        element: <Home />,
      },
      {
        path: "post-blog",
        element: <Home />,
      },
    ],
  },
]);

export default routes;
