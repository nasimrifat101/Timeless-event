import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/root/Root";
import Error from "../pages/404/error";
import Home from "../pages/home/Home";
import Login from "../pages/auth/Login";
import Services from "../pages/Services/Services";
import Details from "../pages/Details/Details";
import Signup from "../pages/auth/signup";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../../public/category.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/details/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: () => fetch("../../public/category.json"),
      },
    ],
  },
]);