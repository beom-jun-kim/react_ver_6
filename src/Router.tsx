import Home from "./router/Home";
import About from "./router/About";
import Header from "./components/Header";
import App from "./App";
import User from "./router/users/User";
import { createBrowserRouter } from "react-router-dom";
import NotFound from "./router/NotFound";
import Followers from "./router/users/Followers";

// createBrowserRouter: Router를 array 형식으로 표현할 수 있게 해준다
const router = createBrowserRouter([
  {
    // "/" : 모두의 부모
    path: "/",
    element: <App />,
    children: [
      {
        // "" : Home 컴포넌트 이동함
        path: "",
        element: <Home />,
      },
      {
        // "경로이름" : app을 render (outlet을 render)
        path: "about",
        element: <About />,
      },
      {
        path: "header",
        element: <Header />,
      },
      {
        path: "users/:userId",
        element: <User />,
        children: [
          {
            path: "followers",
            element: <Followers />,
          },
        ],
      },
    ],

    // 404에러
    errorElement: <NotFound />,
  },
]);

export default router;
