import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import WinterClothes from "../pages/WinterClothes";
import SingleWinterClothes from "../pages/SingleWinterClothes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/winter-clothes",
        element: <WinterClothes />,
      },
      {
        path: "/winter-clothes/:id",
        element: <SingleWinterClothes />,
      },
      {
        path: "/sign-in",
        element: <Signin />,
      },
      {
        path: "/sign-up",
        element: <Signup />,
      },
    ],
  },
]);
