import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import DashboardLayout from "../Layouts/DashboardLayout";
import UserHome from "../Pages/Dashboard/UserHome";
import MyCart from "../Pages/Dashboard/MyCart";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/our-menu", element: <Menu></Menu> },
      { path: "/order/:category", element: <Order></Order> },
      { path: "/order", element: <Order></Order> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      { path: "/dashboard", element: <UserHome></UserHome> },
      { path: "/dashboard/my-cart", element: <MyCart></MyCart> },
    ],
  },
]);
