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
        path: "about",
        element: <Home />,
      },
      {
        path: "top-rated",
        element: <Home />,
      },
      {
        path: "cart",
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
        path: "add-product",
        element: <Home />,
      },
    ],
  },
]);

export default routes;
