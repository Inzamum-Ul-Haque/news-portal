import { createBrowserRouter } from "react-router-dom";
import Category from "../components/Category/Category";
import Home from "../components/Home/Home";
import News from "../components/News/News";
import Register from "../components/Register/Register";
import SignIn from "../components/SignIn/SignIn";
import Main from "../Layouts/Main";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/home",
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
      },
      {
        path: "/category/:id",
        element: <Category />,
      },
      {
        path: "/news/:id",
        element: <News />,
      },
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
