import { createBrowserRouter } from "react-router-dom";
import Category from "../components/Category/Category";
import Home from "../components/Home/Home";
import News from "../components/News/News";
import TermsAndConditions from "../components/Others/TermsAndConditions";
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
        loader: () => {
          return fetch("http://localhost:5000/news");
        },
      },
      {
        path: "/category/:id",
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/category/${params.id}`);
        },
        element: <Category />,
      },
      {
        path: "/news/:id",
        element: <News />,
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/news/${params.id}`);
        },
      },
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/terms",
        element: <TermsAndConditions />,
      },
    ],
  },
]);
