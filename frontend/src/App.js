import { useState } from "react";
import { Provider } from "react-redux";

import Lottie from "lottie-react";

import { RouterProvider } from "react-router-dom";
import store from "./redux/store";
import routes from "./routes/routes";

import logoLoading from "./assets/lottie/logo-loading.json";

function App() {
  const [loading, setLoading] = useState(false);

  setTimeout(function () {
    setLoading(true);
  }, 3000);

  return (
    <>
      {/* {loading && (
        <div className="flex h-[100vh] justify-center items-center">
          <Lottie
            className="w-48 h-48"
            animationData={logoLoading}
            loop={loading}
          />
        </div>
      )} */}

      <div>
        <Provider store={store}>
          <RouterProvider router={routes} />
        </Provider>
      </div>
    </>
  );
}

export default App;
