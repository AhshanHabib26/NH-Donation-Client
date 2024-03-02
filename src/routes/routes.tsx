import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import WinterClothes from "../pages/WinterClothes";
import SingleWinterClothes from "../pages/SingleWinterClothes";
import DashboardLayout from "../components/layout/DashboardLayout";
import Dashboard from "../components/ui/dashboard/Dashboard";
import AllWinterClothes from "../components/ui/dashboard/AllWinterClothes";
import CreateWinterClothes from "../components/ui/dashboard/CreateWinterClothes";
import ProtectedRoute from "../components/layout/ProtectedRoute";
import Leaderboard from "../components/ui/dashboard/Leaderboard";

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
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "winter-clothes",
        element: <AllWinterClothes />,
      },
      {
        path: "create-winter-clothes",
        element: <CreateWinterClothes />,
      },
      {
        path: "leaderboard",
        element: <Leaderboard />,
      },
    ],
  },
]);
